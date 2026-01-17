import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { KundaliData } from '@/pdf/types';

interface BirthDetails {
  name: string;
  dob: string;
  time: string;
  place: string;
  latitude?: number;
  longitude?: number;
}

interface GenerateKundaliError {
  error: string;
}

export const useGenerateKundali = () => {
  return useMutation({
    mutationFn: async (birthDetails: BirthDetails): Promise<KundaliData> => {
      console.log('Calling generate-kundali edge function...');
      
      const { data, error } = await supabase.functions.invoke('generate-kundali', {
        body: birthDetails,
      });
      
      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message || 'Failed to generate kundali');
      }
      
      // Check if response contains an error
      if (data?.error) {
        throw new Error(data.error);
      }
      
      console.log('Kundali data received successfully');
      return data as KundaliData;
    },
    onError: (error) => {
      console.error('useGenerateKundali error:', error);
    },
  });
};
