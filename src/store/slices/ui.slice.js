export const createUiSlice = (set, get) => ({
  isSidebarOpen: true,

  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
});
