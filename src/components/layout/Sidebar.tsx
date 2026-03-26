import React from 'react';
import { ChevronDown, ChevronRight, Info, FileText, PanelLeftClose, PanelLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  showGuidelines: boolean;
  showDocumentation: boolean;
  onGuidelinesClick: () => void;
  onDocumentationClick: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface NavItem {
  id: string;
  labelKey: string;
}

interface NavGroup {
  labelKey: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

const Sidebar = ({ 
  activeSection, 
  onSectionClick, 
  showGuidelines,
  showDocumentation,
  onGuidelinesClick,
  onDocumentationClick,
  collapsed = false,
  onToggleCollapse
}: SidebarProps) => {
  const { t } = useLanguage();
  const [openGroups, setOpenGroups] = React.useState<string[]>(['Fundamentos', 'Componentes', 'Padrões', 'Recursos', 'Acesso Rápido', 'Foundations', 'Components', 'Patterns', 'Resources', 'Quick Access']);

  const navGroups: NavGroup[] = [
    {
      labelKey: 'nav.foundations',
      defaultOpen: true,
      items: [
        { id: 'colors', labelKey: 'nav.colors' },
        { id: 'typography', labelKey: 'nav.typography' },
        { id: 'shadows', labelKey: 'nav.shadows' },
        { id: 'icons', labelKey: 'nav.icons' },
        { id: 'grid', labelKey: 'nav.grid' }
      ]
    },
    {
      labelKey: 'nav.components',
      defaultOpen: true,
      items: [
        { id: 'components', labelKey: 'nav.components.ui' },
        { id: 'navigation', labelKey: 'nav.navigation' },
        { id: 'forms', labelKey: 'nav.forms' }
      ]
    },
    {
      labelKey: 'nav.patterns',
      defaultOpen: true,
      items: [
        { id: 'atomic', labelKey: 'nav.atomic' },
        { id: 'naming', labelKey: 'nav.naming' },
        { id: 'microinteractions', labelKey: 'nav.microinteractions' },
        { id: 'ux-documentation', labelKey: 'nav.uxDocumentation' }
      ]
    },
    {
      labelKey: 'nav.resources',
      defaultOpen: true,
      items: [
        { id: 'figma', labelKey: 'nav.figma' },
        { id: 'figma-integration', labelKey: 'nav.figmaIntegration' },
        { id: 'developer-guide', labelKey: 'nav.developerGuide' },
        { id: 'ai-guide', labelKey: 'nav.aiGuide' }
      ]
    },
    {
      labelKey: 'nav.quickAccess',
      defaultOpen: true,
      items: [
        { id: 'quick-access', labelKey: 'nav.externalLinks' }
      ]
    }
  ];

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => 
      prev.includes(group) 
        ? prev.filter(g => g !== group)
        : [...prev, group]
    );
  };

  const isGroupOpen = (group: string) => openGroups.includes(group);

  // Collapsed state - show only toggle button
  if (collapsed) {
    return (
      <aside className="w-12 h-[calc(100vh-64px)] sticky top-16 border-r border-border bg-background flex flex-col items-center py-4">
        <button
          onClick={onToggleCollapse}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
          aria-label="Expand sidebar"
        >
          <PanelLeft size={16} />
        </button>
      </aside>
    );
  }

  return (
    <aside className="w-[220px] h-[calc(100vh-64px)] sticky top-16 overflow-y-auto border-r border-border bg-background py-6 px-4">
      {/* Collapse button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={onToggleCollapse}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
          aria-label="Collapse sidebar"
        >
          <PanelLeftClose size={16} />
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1">
        {navGroups.map((group) => {
          const groupLabel = t(group.labelKey);
          return (
            <div key={group.labelKey} className="mb-2">
              <button
                onClick={() => toggleGroup(groupLabel)}
                className="flex items-center justify-between w-full px-2 py-1.5 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors"
              >
                <span>{groupLabel}</span>
                {isGroupOpen(groupLabel) ? (
                  <ChevronDown size={14} className="text-muted-foreground" />
                ) : (
                  <ChevronRight size={14} className="text-muted-foreground" />
                )}
              </button>
              
              {isGroupOpen(groupLabel) && (
                <div className="mt-1 ml-2 space-y-0.5">
                  {group.items.map((item) => {
                    const isActive = activeSection === item.id && !showGuidelines && !showDocumentation;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onSectionClick(item.id)}
                        className={`w-full text-left px-3 py-1.5 text-sm rounded transition-colors ${
                          isActive 
                            ? 'text-primary font-medium bg-primary/10' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        {t(item.labelKey)}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Links */}
      <div className="mt-8 pt-4 border-t border-border space-y-1">
        <button
          onClick={onDocumentationClick}
          className={`flex items-center gap-2 w-full px-3 py-1.5 text-sm rounded transition-colors ${
            showDocumentation 
              ? 'text-primary font-medium bg-primary/10' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <Info size={14} />
          {t('nav.documentation')}
        </button>
        <button
          onClick={onGuidelinesClick}
          className={`flex items-center gap-2 w-full px-3 py-1.5 text-sm rounded transition-colors ${
            showGuidelines 
              ? 'text-primary font-medium bg-primary/10' 
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          <FileText size={14} />
          {t('nav.guidelines')}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
