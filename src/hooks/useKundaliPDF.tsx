import { useState, useCallback } from 'react';
import { pdf } from '@react-pdf/renderer';
import type { KundaliData } from '@/pdf/types';
import KundaliPDF from '@/pdf/KundaliPDF';
import { getSampleKundaliData } from '@/pdf/sampleData';

interface UseKundaliPDFOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useKundaliPDF = (options?: UseKundaliPDFOptions) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Get KundaliData from sessionStorage or use sample data as fallback
   */
  const getKundaliData = useCallback((): KundaliData => {
    try {
      const stored = sessionStorage.getItem('boloastro_kundali_data');
      if (stored) {
        const parsed = JSON.parse(stored);
        console.log('Using real kundali data from session');
        return parsed as KundaliData;
      }
    } catch (e) {
      console.error('Failed to parse stored kundali data:', e);
    }
    
    console.log('Using sample kundali data as fallback');
    return getSampleKundaliData();
  }, []);

  /**
   * Generate and download the PDF
   */
  const downloadPDF = useCallback(async (customData?: KundaliData) => {
    setIsGenerating(true);
    setError(null);

    try {
      const data = customData || getKundaliData();
      console.log('Generating PDF for:', data.userData.name);

      // Generate PDF blob
      const blob = await pdf(<KundaliPDF data={data} />).toBlob();
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Kundali_${data.userData.name.replace(/\s+/g, '_')}.pdf`;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Cleanup
      URL.revokeObjectURL(url);
      
      console.log('PDF downloaded successfully');
      options?.onSuccess?.();
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      const error = err instanceof Error ? err : new Error('Failed to generate PDF');
      setError(error);
      options?.onError?.(error);
    } finally {
      setIsGenerating(false);
    }
  }, [getKundaliData, options]);

  /**
   * Check if real kundali data is available
   */
  const hasRealData = useCallback((): boolean => {
    try {
      const stored = sessionStorage.getItem('boloastro_kundali_data');
      return !!stored;
    } catch {
      return false;
    }
  }, []);

  return {
    downloadPDF,
    isGenerating,
    error,
    hasRealData,
    getKundaliData,
  };
};
