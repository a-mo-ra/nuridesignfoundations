import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor, Copy, Check, ExternalLink, Layers, Move, Maximize2, MinusSquare, LayoutGrid, Menu, User, Search, Home, Settings, Bell, ChevronRight, Image, FileText, ShoppingCart, MessageSquare, BarChart3, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Wireframe Components
const WireframeBox = ({ className = '', label = '' }: { className?: string; label?: string }) => (
  <div className={`bg-muted/50 border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center text-xs text-muted-foreground font-medium ${className}`}>
    {label}
  </div>
);

const WireframeHeader = ({ variant = 'simple' }: { variant?: 'simple' | 'with-search' | 'with-tabs' }) => (
  <div className="bg-card border-b-2 border-dashed border-muted-foreground/30 p-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
        <Layers size={16} className="text-primary" />
      </div>
      <div className="w-20 h-4 bg-muted rounded" />
    </div>
    {variant === 'with-search' && (
      <div className="flex-1 max-w-md mx-4">
        <div className="w-full h-9 bg-muted rounded-lg flex items-center px-3 gap-2">
          <Search size={14} className="text-muted-foreground" />
          <div className="w-24 h-3 bg-muted-foreground/20 rounded" />
        </div>
      </div>
    )}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-muted rounded-full" />
      <div className="w-8 h-8 bg-muted rounded-full" />
    </div>
  </div>
);

const WireframeNav = ({ items = 4, orientation = 'horizontal' }: { items?: number; orientation?: 'horizontal' | 'vertical' }) => {
  if (orientation === 'vertical') {
    return (
      <div className="w-56 bg-card border-r-2 border-dashed border-muted-foreground/30 p-3 space-y-2">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i} className={`flex items-center gap-3 p-2 rounded-lg ${i === 0 ? 'bg-primary/10' : 'hover:bg-muted/50'}`}>
            <div className="w-5 h-5 bg-muted rounded" />
            <div className="w-20 h-3 bg-muted rounded" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="bg-card border-b-2 border-dashed border-muted-foreground/30 p-2 flex items-center gap-4 px-4">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className={`px-3 py-1.5 rounded-lg ${i === 0 ? 'bg-primary/10' : ''}`}>
          <div className="w-16 h-3 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
};

const WireframeBottomNav = () => (
  <div className="bg-card border-t-2 border-dashed border-muted-foreground/30 p-2 flex items-center justify-around">
    {[Home, Search, Bell, User].map((Icon, i) => (
      <div key={i} className={`p-2 rounded-lg ${i === 0 ? 'bg-primary/10' : ''}`}>
        <Icon size={20} className="text-muted-foreground" />
      </div>
    ))}
  </div>
);

const WireframeCard = ({ aspectRatio = 'square' }: { aspectRatio?: 'square' | 'wide' | 'tall' }) => {
  const heights: Record<string, string> = { square: 'h-32', wide: 'h-24', tall: 'h-44' };
  return (
    <div className="bg-card border-2 border-dashed border-muted-foreground/30 rounded-xl p-3 space-y-2">
      <div className={`bg-muted rounded-lg ${heights[aspectRatio]} flex items-center justify-center`}>
        <Image size={24} className="text-muted-foreground/50" />
      </div>
      <div className="w-3/4 h-4 bg-muted rounded" />
      <div className="w-1/2 h-3 bg-muted/70 rounded" />
    </div>
  );
};

// Screen Templates Data
const screenTemplates = {
  mobile: [
    {
      name: 'Dashboard Mobile',
      description: 'Layout com header, cards de métricas e bottom nav',
      category: 'dashboard',
      structure: {
        header: 'Header com logo e avatar',
        content: 'Grid 2x2 de cards + lista',
        nav: 'Bottom navigation 4 itens'
      }
    },
    {
      name: 'Login / Onboarding',
      description: 'Tela de autenticação com form centralizado',
      category: 'auth',
      structure: {
        header: 'Logo centralizado',
        content: 'Form com inputs e CTA',
        nav: 'Links secundários'
      }
    },
    {
      name: 'Lista com Busca',
      description: 'Header com search, lista de itens scrollable',
      category: 'list',
      structure: {
        header: 'Search bar sticky',
        content: 'Lista de cards/rows',
        nav: 'Bottom nav ou FAB'
      }
    },
    {
      name: 'Perfil / Settings',
      description: 'Avatar, info do usuário e lista de opções',
      category: 'profile',
      structure: {
        header: 'Avatar + nome',
        content: 'Lista de configurações',
        nav: 'Bottom navigation'
      }
    },
    {
      name: 'Detalhe de Item',
      description: 'Imagem hero, título, descrição e ações',
      category: 'detail',
      structure: {
        header: 'Back button + actions',
        content: 'Hero image + info',
        nav: 'Sticky CTA button'
      }
    },
    {
      name: 'Feed / Timeline',
      description: 'Stories no topo, feed infinito de posts',
      category: 'feed',
      structure: {
        header: 'Logo + notifications',
        content: 'Stories + posts',
        nav: 'Bottom navigation'
      }
    }
  ],
  tablet: [
    {
      name: 'Dashboard Split',
      description: 'Sidebar colapsável + área de conteúdo principal',
      category: 'dashboard',
      structure: {
        header: 'Top bar com breadcrumb',
        sidebar: 'Nav rail ou sidebar',
        content: 'Grid de widgets'
      }
    },
    {
      name: 'Master-Detail',
      description: 'Lista na esquerda, detalhe na direita',
      category: 'list',
      structure: {
        header: 'Search + filters',
        sidebar: 'Lista de itens',
        content: 'Detalhe selecionado'
      }
    },
    {
      name: 'Kanban Board',
      description: 'Colunas horizontais com cards draggable',
      category: 'board',
      structure: {
        header: 'Título + actions',
        content: '3-4 colunas scrollable',
        nav: 'Tabs ou breadcrumb'
      }
    },
    {
      name: 'Form Multi-step',
      description: 'Stepper lateral + form grande',
      category: 'form',
      structure: {
        sidebar: 'Progress stepper',
        content: 'Form fields',
        footer: 'Navigation buttons'
      }
    }
  ],
  desktop: [
    {
      name: 'Dashboard Completo',
      description: 'Sidebar, header, grid de widgets e gráficos',
      category: 'dashboard',
      structure: {
        sidebar: 'Nav completa expandida',
        header: 'Search + user menu',
        content: 'Grid 3-4 colunas'
      }
    },
    {
      name: 'Admin Table',
      description: 'Tabela de dados com filters, pagination',
      category: 'admin',
      structure: {
        header: 'Filters + bulk actions',
        content: 'Data table sortable',
        footer: 'Pagination'
      }
    },
    {
      name: 'Landing Page',
      description: 'Hero, features, testimonials, CTA, footer',
      category: 'marketing',
      structure: {
        header: 'Nav + CTA button',
        content: 'Sections full-width',
        footer: 'Links + newsletter'
      }
    },
    {
      name: 'Email / Inbox',
      description: 'Three-pane layout: folders, list, preview',
      category: 'app',
      structure: {
        sidebar: 'Folders/labels',
        list: 'Email list',
        content: 'Email preview'
      }
    },
    {
      name: 'E-commerce PDP',
      description: 'Galeria, info produto, reviews, related',
      category: 'ecommerce',
      structure: {
        header: 'Nav + cart + search',
        content: 'Gallery + info split',
        sections: 'Reviews + related'
      }
    },
    {
      name: 'Analytics Dashboard',
      description: 'KPIs no topo, gráficos grandes, tabelas',
      category: 'analytics',
      structure: {
        header: 'Date picker + filters',
        content: 'Charts grid',
        sidebar: 'Quick stats'
      }
    }
  ]
};

const FigmaTemplates = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [activeSection, setActiveSection] = useState<'templates' | 'specs' | 'autolayout'>('templates');

  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      toast({
        title: "Copiado!",
        description: `${itemName} copiado para área de transferência.`,
      });
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar.",
        variant: "destructive"
      });
    }
  };

  const breakpoints = {
    mobile: [
      { name: 'iPhone SE', width: 375, height: 667, scale: '2x' },
      { name: 'iPhone 14', width: 390, height: 844, scale: '3x' },
      { name: 'iPhone 14 Pro Max', width: 430, height: 932, scale: '3x' },
      { name: 'Android Small', width: 360, height: 640, scale: '2x' },
      { name: 'Android Large', width: 412, height: 915, scale: '2.625x' },
      { name: 'Pixel 7', width: 412, height: 915, scale: '2.625x' },
    ],
    tablet: [
      { name: 'iPad Mini', width: 744, height: 1133, scale: '2x' },
      { name: 'iPad Air', width: 820, height: 1180, scale: '2x' },
      { name: 'iPad Pro 11"', width: 834, height: 1194, scale: '2x' },
      { name: 'iPad Pro 12.9"', width: 1024, height: 1366, scale: '2x' },
      { name: 'Android Tablet', width: 800, height: 1280, scale: '1.5x' },
      { name: 'Surface Pro', width: 912, height: 1368, scale: '2x' },
    ],
    desktop: [
      { name: 'MacBook Air', width: 1280, height: 832, scale: '2x' },
      { name: 'MacBook Pro 14"', width: 1512, height: 982, scale: '2x' },
      { name: 'MacBook Pro 16"', width: 1728, height: 1117, scale: '2x' },
      { name: 'Desktop HD', width: 1920, height: 1080, scale: '1x' },
      { name: 'Desktop 2K', width: 2560, height: 1440, scale: '1x' },
      { name: 'Desktop 4K', width: 3840, height: 2160, scale: '1x' },
    ]
  };

  const autolayoutProperties = [
    {
      property: 'direction',
      options: ['Horizontal', 'Vertical'],
      figmaKey: 'layoutMode',
      description: 'Define a direção do fluxo dos elementos filhos',
      icon: Move
    },
    {
      property: 'spacing',
      options: ['4px', '8px', '12px', '16px', '24px', '32px'],
      figmaKey: 'itemSpacing',
      description: 'Espaçamento entre elementos (baseado no Material Design)',
      icon: Layers
    },
    {
      property: 'padding',
      options: ['8px', '16px', '24px', '32px', '48px'],
      figmaKey: 'paddingTop/Right/Bottom/Left',
      description: 'Espaçamento interno do container',
      icon: Maximize2
    },
    {
      property: 'resizing',
      options: ['Hug contents', 'Fill container', 'Fixed'],
      figmaKey: 'primaryAxisSizingMode / counterAxisSizingMode',
      description: 'Como o elemento se adapta ao conteúdo ou container pai',
      icon: MinusSquare
    }
  ];

  const materialBreakpoints = [
    { name: 'Compact', range: '0-599px', type: 'Phone', columns: 4, margins: '16px', gutter: '16px' },
    { name: 'Medium', range: '600-839px', type: 'Tablet (Portrait)', columns: 8, margins: '24px', gutter: '24px' },
    { name: 'Expanded', range: '840-1199px', type: 'Tablet (Landscape)', columns: 12, margins: '24px', gutter: '24px' },
    { name: 'Large', range: '1200-1599px', type: 'Desktop', columns: 12, margins: '32px', gutter: '24px' },
    { name: 'Extra-large', range: '1600px+', type: 'Large Desktop', columns: 12, margins: 'Auto', gutter: '24px' }
  ];

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'mobile': return Smartphone;
      case 'tablet': return Tablet;
      case 'desktop': return Monitor;
      default: return Smartphone;
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ElementType> = {
      dashboard: BarChart3,
      auth: User,
      list: FileText,
      profile: User,
      detail: FileText,
      feed: MessageSquare,
      board: LayoutGrid,
      form: FileText,
      admin: Settings,
      marketing: Home,
      app: MessageSquare,
      ecommerce: ShoppingCart,
      analytics: BarChart3
    };
    return icons[category] || LayoutGrid;
  };

  // Render wireframe preview based on template
  const renderWireframePreview = (template: typeof screenTemplates.mobile[0], device: 'mobile' | 'tablet' | 'desktop') => {
    const baseClasses = "bg-background border-2 border-muted-foreground/20 rounded-2xl overflow-hidden shadow-lg";
    
    if (device === 'mobile') {
      return (
        <div className={`${baseClasses} w-[180px] h-[320px] flex flex-col`}>
          <WireframeHeader variant="simple" />
          <div className="flex-1 p-2 space-y-2 overflow-hidden">
            {template.category === 'dashboard' && (
              <>
                <div className="grid grid-cols-2 gap-1.5">
                  {[1, 2, 3, 4].map(i => (
                    <WireframeBox key={i} className="h-12" />
                  ))}
                </div>
                <WireframeBox className="h-16" label="Chart" />
              </>
            )}
            {template.category === 'auth' && (
              <div className="flex flex-col items-center justify-center h-full gap-2 p-2">
                <div className="w-12 h-12 bg-primary/20 rounded-xl" />
                <WireframeBox className="w-full h-8" />
                <WireframeBox className="w-full h-8" />
                <WireframeBox className="w-full h-10 bg-primary/20" label="CTA" />
              </div>
            )}
            {template.category === 'list' && (
              <div className="space-y-1.5">
                <WireframeBox className="h-8" label="Search" />
                {[1, 2, 3, 4].map(i => (
                  <WireframeBox key={i} className="h-12" />
                ))}
              </div>
            )}
            {template.category === 'profile' && (
              <div className="flex flex-col items-center gap-2 p-2">
                <div className="w-16 h-16 bg-muted rounded-full" />
                <WireframeBox className="w-20 h-4" />
                <div className="w-full space-y-1.5 mt-2">
                  {[1, 2, 3].map(i => (
                    <WireframeBox key={i} className="h-10" />
                  ))}
                </div>
              </div>
            )}
            {template.category === 'detail' && (
              <>
                <WireframeBox className="h-24" label="Hero" />
                <WireframeBox className="h-5" />
                <WireframeBox className="h-3 w-2/3" />
                <WireframeBox className="h-16" />
              </>
            )}
            {template.category === 'feed' && (
              <>
                <div className="flex gap-1.5 overflow-hidden">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 bg-muted rounded-full flex-shrink-0" />
                  ))}
                </div>
                {[1, 2].map(i => (
                  <WireframeBox key={i} className="h-24" />
                ))}
              </>
            )}
          </div>
          <WireframeBottomNav />
        </div>
      );
    }

    if (device === 'tablet') {
      return (
        <div className={`${baseClasses} w-[280px] h-[200px] flex`}>
          <WireframeNav items={5} orientation="vertical" />
          <div className="flex-1 flex flex-col">
            <WireframeHeader variant="with-search" />
            <div className="flex-1 p-3 space-y-2">
              {template.category === 'dashboard' && (
                <div className="grid grid-cols-3 gap-2 h-full">
                  <WireframeBox className="h-full" label="Widget" />
                  <WireframeBox className="h-full" label="Widget" />
                  <WireframeBox className="h-full" label="Widget" />
                </div>
              )}
              {template.category === 'list' && (
                <div className="flex gap-2 h-full">
                  <div className="w-1/3 space-y-1.5">
                    {[1, 2, 3, 4].map(i => (
                      <WireframeBox key={i} className="h-8" />
                    ))}
                  </div>
                  <WireframeBox className="flex-1" label="Detail" />
                </div>
              )}
              {template.category === 'board' && (
                <div className="flex gap-2 h-full">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex-1 space-y-1.5">
                      <WireframeBox className="h-6" />
                      <WireframeBox className="h-12" />
                      <WireframeBox className="h-10" />
                    </div>
                  ))}
                </div>
              )}
              {template.category === 'form' && (
                <div className="flex gap-2 h-full">
                  <div className="w-1/4 space-y-1">
                    {[1, 2, 3, 4].map(i => (
                      <WireframeBox key={i} className={`h-6 ${i === 1 ? 'bg-primary/20' : ''}`} />
                    ))}
                  </div>
                  <div className="flex-1 space-y-2">
                    <WireframeBox className="h-8" />
                    <WireframeBox className="h-8" />
                    <WireframeBox className="h-16" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Desktop
    return (
      <div className={`${baseClasses} w-[400px] h-[240px] flex`}>
        <WireframeNav items={6} orientation="vertical" />
        <div className="flex-1 flex flex-col">
          <WireframeHeader variant="with-search" />
          <div className="flex-1 p-4 space-y-3 overflow-hidden">
            {template.category === 'dashboard' && (
              <>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <WireframeBox key={i} className="h-14" />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <WireframeBox className="h-24" label="Chart" />
                  <WireframeBox className="h-24" label="Chart" />
                </div>
              </>
            )}
            {template.category === 'admin' && (
              <>
                <div className="flex gap-2">
                  <WireframeBox className="h-8 flex-1" label="Filters" />
                  <WireframeBox className="h-8 w-24" label="Actions" />
                </div>
                <WireframeBox className="flex-1 h-32" label="Data Table" />
                <div className="flex justify-between items-center">
                  <WireframeBox className="h-6 w-32" />
                  <WireframeBox className="h-6 w-40" />
                </div>
              </>
            )}
            {template.category === 'marketing' && (
              <>
                <WireframeBox className="h-20" label="Hero Section" />
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map(i => (
                    <WireframeBox key={i} className="h-16" label="Feature" />
                  ))}
                </div>
              </>
            )}
            {template.category === 'app' && (
              <div className="flex gap-2 h-full">
                <div className="w-1/5 space-y-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <WireframeBox key={i} className="h-6" />
                  ))}
                </div>
                <div className="w-2/5 space-y-1">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <WireframeBox key={i} className={`h-8 ${i === 1 ? 'bg-primary/10' : ''}`} />
                  ))}
                </div>
                <WireframeBox className="flex-1" label="Preview" />
              </div>
            )}
            {template.category === 'ecommerce' && (
              <div className="flex gap-3 h-full">
                <WireframeBox className="w-1/2 h-full" label="Gallery" />
                <div className="flex-1 space-y-2">
                  <WireframeBox className="h-6" />
                  <WireframeBox className="h-4 w-1/2" />
                  <WireframeBox className="h-8" />
                  <WireframeBox className="h-10 bg-primary/20" label="Add to Cart" />
                </div>
              </div>
            )}
            {template.category === 'analytics' && (
              <>
                <div className="flex gap-2">
                  <WireframeBox className="h-8 flex-1" label="Date Range" />
                  <WireframeBox className="h-8 w-32" label="Filters" />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <WireframeBox key={i} className="h-12" label="KPI" />
                  ))}
                </div>
                <WireframeBox className="flex-1 h-20" label="Main Chart" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          Figma Plus
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Templates de wireframes prontos + especificações de responsividade baseadas no Material Design 3.
        </p>
      </div>

      {/* Section Tabs */}
      <Tabs value={activeSection} onValueChange={(v) => setActiveSection(v as typeof activeSection)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <LayoutGrid size={16} />
            Telas Prontas
          </TabsTrigger>
          <TabsTrigger value="specs" className="flex items-center gap-2">
            <Monitor size={16} />
            Dimensões
          </TabsTrigger>
          <TabsTrigger value="autolayout" className="flex items-center gap-2">
            <Move size={16} />
            Auto Layout
          </TabsTrigger>
        </TabsList>

        {/* Templates Section */}
        <TabsContent value="templates" className="space-y-6">
          {/* Device Tabs */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="flex border-b border-border">
              {(['mobile', 'tablet', 'desktop'] as const).map((tab) => {
                const Icon = getTabIcon(tab);
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-muted text-foreground border-b-2 border-foreground' 
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="capitalize">{tab}</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full ml-1">
                      {screenTemplates[tab].length}
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="p-6">
              <div className="grid gap-6">
                {screenTemplates[activeTab].map((template, index) => {
                  const CategoryIcon = getCategoryIcon(template.category);
                  return (
                    <div 
                      key={template.name}
                      className="group bg-muted/20 hover:bg-muted/40 rounded-2xl p-6 border border-border hover:border-foreground/30 transition-all"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Preview */}
                        <div className="flex justify-center lg:justify-start">
                          {renderWireframePreview(template, activeTab)}
                        </div>
                        
                        {/* Info */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex items-center gap-1.5 text-xs bg-muted text-foreground px-2.5 py-1 rounded-full">
                                  <CategoryIcon size={12} />
                                  {template.category}
                                </span>
                              </div>
                              <h4 className="text-lg font-semibold text-foreground">{template.name}</h4>
                              <p className="text-muted-foreground text-sm mt-1">{template.description}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(JSON.stringify(template.structure, null, 2), template.name)}
                              className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-background transition-all"
                              title="Copiar estrutura"
                            >
                              {copiedItem === template.name ? (
                                <Check size={16} className="text-green-500" />
                              ) : (
                                <Copy size={16} className="text-muted-foreground" />
                              )}
                            </button>
                          </div>
                          
                          {/* Structure Breakdown */}
                          <div className="bg-background/50 rounded-xl p-4 border border-border">
                            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Estrutura do Layout</h5>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {Object.entries(template.structure).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-2 text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full" />
                                  <span className="text-muted-foreground capitalize">{key}:</span>
                                  <span className="text-foreground">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Figma Tips */}
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Dica Figma:</span> Use Auto Layout com Fill/Hug para replicar este layout responsivamente
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Specs Section */}
        <TabsContent value="specs" className="space-y-6">
          {/* Material Design 3 Breakpoints */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <ExternalLink size={16} className="text-background" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Material Design 3 - Breakpoints Oficiais</h3>
                <a 
                  href="https://m3.material.io/foundations/layout/applying-layout/window-size-classes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Documentação oficial do Google →
                </a>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Window Class</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Largura</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Dispositivo</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Colunas</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Margins</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Gutter</th>
                  </tr>
                </thead>
                <tbody>
                  {materialBreakpoints.map((bp, index) => (
                    <tr key={bp.name} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="py-3 px-4 font-medium text-foreground">{bp.name}</td>
                      <td className="py-3 px-4">
                        <code className="text-xs bg-muted px-2 py-1 rounded font-mono">{bp.range}</code>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{bp.type}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-foreground text-background rounded-lg font-semibold">
                          {bp.columns}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{bp.margins}</td>
                      <td className="py-3 px-4 text-center text-muted-foreground">{bp.gutter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Device Frames */}
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="flex border-b border-border">
              {(['mobile', 'tablet', 'desktop'] as const).map((tab) => {
                const Icon = getTabIcon(tab);
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-muted text-foreground border-b-2 border-foreground' 
                        : 'text-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="capitalize">{tab}</span>
                  </button>
                );
              })}
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {breakpoints[activeTab].map((device) => (
                  <div 
                    key={device.name}
                    className="group bg-muted/30 hover:bg-muted/50 rounded-xl p-4 border border-border hover:border-foreground/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{device.name}</h4>
                      <button
                        onClick={() => copyToClipboard(`${device.width} x ${device.height}`, device.name)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-background transition-all"
                        title="Copiar dimensões"
                      >
                        {copiedItem === device.name ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} className="text-muted-foreground" />
                        )}
                      </button>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">{device.width}</span>
                      <span className="text-muted-foreground">×</span>
                      <span className="text-2xl font-bold text-foreground">{device.height}</span>
                      <span className="text-xs text-muted-foreground ml-2">@ {device.scale}</span>
                    </div>
                    
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs bg-muted text-foreground px-2 py-1 rounded-full">
                        Frame Figma
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Auto Layout Section */}
        <TabsContent value="autolayout" className="space-y-6">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Move size={20} className="text-foreground" />
              Propriedades de Auto Layout
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {autolayoutProperties.map((prop) => {
                const Icon = prop.icon;
                return (
                  <div key={prop.property} className="bg-muted/30 rounded-xl p-5 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-background" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground capitalize">{prop.property}</h4>
                        <code className="text-xs text-muted-foreground font-mono">{prop.figmaKey}</code>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{prop.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {prop.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => copyToClipboard(option, `${prop.property}-${option}`)}
                          className="px-3 py-1.5 text-xs bg-background border border-border rounded-lg hover:border-foreground/50 hover:bg-muted transition-all font-medium"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hug vs Fill Explanation */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-success-50 dark:bg-success-500/10 rounded-xl p-5 border border-success-500/20">
                <h4 className="font-semibold text-success-700 dark:text-success-500 mb-2 flex items-center gap-2">
                  <MinusSquare size={16} />
                  Hug Contents
                </h4>
                <p className="text-sm text-success-600 dark:text-success-500 mb-3">
                  O frame se ajusta ao tamanho do seu conteúdo. Ideal para botões, badges e elementos de tamanho dinâmico.
                </p>
                <code className="text-xs bg-success-500/10 text-success-700 dark:text-success-500 px-2 py-1 rounded block">
                  primaryAxisSizingMode: "AUTO"
                </code>
              </div>
              
              <div className="bg-info-50 dark:bg-info-500/10 rounded-xl p-5 border border-info-500/20">
                <h4 className="font-semibold text-info-700 dark:text-info-500 mb-2 flex items-center gap-2">
                  <Maximize2 size={16} />
                  Fill Container
                </h4>
                <p className="text-sm text-info-600 dark:text-info-500 mb-3">
                  O frame expande para preencher o container pai. Ideal para layouts responsivos e containers flexíveis.
                </p>
                <code className="text-xs bg-info-500/10 text-info-700 dark:text-info-500 px-2 py-1 rounded block">
                  layoutAlign: "STRETCH" / layoutGrow: 1
                </code>
              </div>
            </div>
          </div>

          {/* Quick Setup Guide */}
          <div className="bg-muted rounded-2xl p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">🚀 Setup Rápido no Figma</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">1. Criar Frame</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pressione <kbd className="px-1.5 py-0.5 bg-background rounded text-xs border border-border">F</kbd> para criar frame</li>
                  <li>• Selecione o dispositivo na lista</li>
                  <li>• Ou digite dimensões customizadas</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">2. Ativar Auto Layout</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pressione <kbd className="px-1.5 py-0.5 bg-background rounded text-xs border border-border">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-background rounded text-xs border border-border">A</kbd></li>
                  <li>• Configure direção (H/V)</li>
                  <li>• Ajuste spacing e padding</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">3. Configurar Constraints</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use Fill para elementos fluidos</li>
                  <li>• Use Hug para conteúdo dinâmico</li>
                  <li>• Combine com min/max width</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reference Links */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">📚 Referências Oficiais</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Material Design 3 - Layout',
                  url: 'https://m3.material.io/foundations/layout/understanding-layout/overview',
                  description: 'Guia completo de layout do Google'
                },
                {
                  title: 'Figma - Auto Layout',
                  url: 'https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout',
                  description: 'Documentação oficial do Auto Layout'
                },
                {
                  title: 'Material Design - Responsive Layout Grid',
                  url: 'https://m3.material.io/foundations/layout/applying-layout/window-size-classes',
                  description: 'Sistema de grid responsivo'
                },
                {
                  title: 'Figma - Constraints',
                  url: 'https://help.figma.com/hc/en-us/articles/360039957734-Apply-constraints-to-define-how-layers-resize',
                  description: 'Como usar constraints para responsividade'
                }
              ].map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border hover:border-foreground/30 hover:bg-muted/50 transition-all group"
                >
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <DigitalChecklist />
    </div>
  );
};

export default FigmaTemplates;
