import React, { useState } from 'react';
import  TopNavigation  from '../components/dashboard/TopNavigation.jsx';

const Dashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
    const [rightPanelOpen, setRightPanelOpen] = useState(false);
    const [currentView, setCurrentView] = useState('list'); // removed TypeScript type annotation
    const [showNewTaskForm, setShowNewTaskForm] = useState(false);
  
    const handleNewTask = () => {
      setShowNewTaskForm(true);
    };
  
    const handleToggleNewTaskForm = () => {
      setShowNewTaskForm(!showNewTaskForm);
    };
    
    return (
        <div className="min-h-screen bg-background text-foreground">
          <TopNavigation 
            onToggleSidebar={() => {
              if (window.innerWidth < 768) {
                setSidebarMobileOpen(!sidebarMobileOpen);
              } else {
                setSidebarCollapsed(!sidebarCollapsed);
              }
            }}
            onToggleRightPanel={() => setRightPanelOpen(!rightPanelOpen)}
            sidebarMobileOpen={sidebarMobileOpen}
            onCloseMobileSidebar={() => setSidebarMobileOpen(false)}
            onNewTask={handleNewTask}
          />
        </div>
    );
};

export default Dashboard;