// types.d.ts
declare namespace wx {
  function getStorageSync(key: string): any;
  function setStorageSync(key: string, data: any): void;
  function clearStorageSync(): void;
  function showToast(options: { title: string; icon?: string }): void;
  function navigateTo(options: { url: string }): void;
  function showLoading(options: { title: string }): void;
  function hideLoading(): void;
  function showModal(options: { 
    title?: string; 
    content: string; 
    showCancel?: boolean; 
    confirmText?: string 
  }): Promise<any>;
}