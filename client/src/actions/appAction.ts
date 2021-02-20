export type ToggleSidebarAction = { type: "TOGGLE_SIDEBAR" };

export const toggleSidebar = (): ToggleSidebarAction => ({
  type: "TOGGLE_SIDEBAR",
});
