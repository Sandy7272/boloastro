import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  FileText, 
  CreditCard, 
  Activity, 
  MessageSquare,
  Download,
  RefreshCw,
  LogOut,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DashboardStats {
  totalUsers: number;
  totalKundalis: number;
  totalPayments: number;
  pendingPayments: number;
  totalRevenue: number;
  todayKundalis: number;
}

interface KundaliReport {
  id: string;
  name: string;
  dob: string;
  birth_place: string;
  created_at: string;
  is_premium: boolean;
}

interface Payment {
  id: string;
  amount: number;
  status: string;
  payment_method: string;
  created_at: string;
}

interface ApiLog {
  id: string;
  endpoint: string;
  method: string;
  response_status: number;
  response_time_ms: number;
  created_at: string;
  error_message?: string;
}

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [kundalis, setKundalis] = useState<KundaliReport[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [logs, setLogs] = useState<ApiLog[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/');
        return;
      }

      // Check if user has admin role
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .single();

      if (roles) {
        setIsAdmin(true);
        await loadDashboardData();
      } else {
        setIsAdmin(false);
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Admin check error:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const loadDashboardData = async () => {
    setRefreshing(true);
    try {
      // Load stats
      const [
        { count: userCount },
        { count: kundaliCount },
        { data: paymentsData },
        { data: todayKundalis },
        { data: kundaliList },
        { data: paymentList },
        { data: logList }
      ] = await Promise.all([
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase.from('kundali_raw').select('*', { count: 'exact', head: true }),
        supabase.from('payments').select('amount, status'),
        supabase.from('kundali_raw')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', new Date().toISOString().split('T')[0]),
        supabase.from('kundali_raw')
          .select('id, name, dob, birth_place, created_at')
          .order('created_at', { ascending: false })
          .limit(50),
        supabase.from('payments')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50),
        supabase.from('api_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(100)
      ]);

      const completedPayments = paymentsData?.filter(p => p.status === 'completed') || [];
      const pendingPayments = paymentsData?.filter(p => p.status === 'pending') || [];
      const totalRevenue = completedPayments.reduce((sum, p) => sum + (p.amount || 0), 0);

      setStats({
        totalUsers: userCount || 0,
        totalKundalis: kundaliCount || 0,
        totalPayments: paymentsData?.length || 0,
        pendingPayments: pendingPayments.length,
        totalRevenue,
        todayKundalis: todayKundalis?.length || 0,
      });

      // Map kundali list with premium status
      const kundaliWithPremium = await Promise.all(
        (kundaliList || []).map(async (k) => {
          const { data: report } = await supabase
            .from('kundali_ai_reports')
            .select('is_premium')
            .eq('kundali_raw_id', k.id)
            .single();
          return { ...k, is_premium: report?.is_premium || false };
        })
      );

      setKundalis(kundaliWithPremium);
      setPayments(paymentList || []);
      setLogs(logList || []);

    } catch (error) {
      console.error('Failed to load dashboard:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive"
      });
    } finally {
      setRefreshing(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-24 mb-2" />
                  <Skeleton className="h-4 w-16" />
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (isAdmin === false) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/')} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage BoloAstro operations</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={loadDashboardData}
              disabled={refreshing}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats?.totalUsers || 0}</p>
                  <p className="text-xs text-muted-foreground">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <FileText className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats?.totalKundalis || 0}</p>
                  <p className="text-xs text-muted-foreground">Kundalis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats?.todayKundalis || 0}</p>
                  <p className="text-xs text-muted-foreground">Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats?.totalPayments || 0}</p>
                  <p className="text-xs text-muted-foreground">Payments</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Activity className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats?.pendingPayments || 0}</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <BarChart3 className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">₹{stats?.totalRevenue?.toLocaleString() || 0}</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="kundalis" className="space-y-4">
          <TabsList className="grid w-full md:w-auto grid-cols-4 md:inline-flex">
            <TabsTrigger value="kundalis" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden md:inline">Kundalis</span>
            </TabsTrigger>
            <TabsTrigger value="payments" className="gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden md:inline">Payments</span>
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </TabsTrigger>
            <TabsTrigger value="logs" className="gap-2">
              <Activity className="w-4 h-4" />
              <span className="hidden md:inline">API Logs</span>
            </TabsTrigger>
          </TabsList>

          {/* Kundalis Tab */}
          <TabsContent value="kundalis">
            <Card>
              <CardHeader>
                <CardTitle>Recent Kundali Reports</CardTitle>
                <CardDescription>All generated kundali reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>DOB</TableHead>
                        <TableHead>Place</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {kundalis.map((k) => (
                        <TableRow key={k.id}>
                          <TableCell className="font-medium">{k.name}</TableCell>
                          <TableCell>{k.dob}</TableCell>
                          <TableCell>{k.birth_place}</TableCell>
                          <TableCell>
                            <Badge variant={k.is_premium ? "default" : "secondary"}>
                              {k.is_premium ? 'Premium' : 'Basic'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(k.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {kundalis.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                            No kundalis generated yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>All payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payments.map((p) => (
                        <TableRow key={p.id}>
                          <TableCell className="font-medium">₹{p.amount}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={p.status === 'completed' ? 'default' : 
                                      p.status === 'pending' ? 'secondary' : 'destructive'}
                            >
                              {p.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                              {p.status === 'failed' && <XCircle className="w-3 h-3 mr-1" />}
                              {p.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{p.payment_method || 'N/A'}</TableCell>
                          <TableCell>
                            {new Date(p.created_at).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))}
                      {payments.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                            No payments yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WhatsApp Tab */}
          <TabsContent value="whatsapp">
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp Sessions</CardTitle>
                <CardDescription>Active bot conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground py-12">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>WhatsApp session tracking coming soon</p>
                  <p className="text-sm">Sessions are stored in the database</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Logs Tab */}
          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>API Logs</CardTitle>
                <CardDescription>Recent API calls and responses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Time (ms)</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {logs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell className="font-mono text-sm">{log.endpoint}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{log.method}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant={log.response_status < 400 ? 'default' : 'destructive'}
                            >
                              {log.response_status}
                            </Badge>
                          </TableCell>
                          <TableCell>{log.response_time_ms || '-'}</TableCell>
                          <TableCell>
                            {new Date(log.created_at).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                      {logs.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                            No API logs yet
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
