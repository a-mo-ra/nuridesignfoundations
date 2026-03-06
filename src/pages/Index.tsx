import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Sidebar from '@/components/layout/Sidebar';
import HomePage from '@/components/home/HomePage';
import ColorTokens from '@/components/design-system/ColorTokens';
import TypographyScale from '@/components/design-system/TypographyScale';
import ComponentLibrary from '@/components/design-system/ComponentLibrary';
import GridSystem from '@/components/design-system/GridSystem';
import ShadowSystem from '@/components/design-system/ShadowSystem';
import IconLibrary from '@/components/design-system/IconLibrary';
import NavigationSystem from '@/components/design-system/NavigationSystem';
import FormSystem from '@/components/design-system/FormSystem';
import NamingConventions from '@/components/design-system/NamingConventions';
import DesignGuidelines from '@/components/design-system/DesignGuidelines';
import DocumentationGuide from '@/components/design-system/DocumentationGuide';
import FigmaTemplates from '@/components/design-system/FigmaTemplates';
import FigmaIntegration from '@/components/design-system/FigmaIntegration';
import AtomicDesign from '@/components/design-system/AtomicDesign';
import DeveloperGuide from '@/components/design-system/DeveloperGuide';
import UXDocumentation from '@/components/design-system/UXDocumentation';
import QuickAccess from '@/components/design-system/QuickAccess';
import UXMetricsGuide from '@/components/design-system/UXMetricsGuide';
import Microinteractions from '@/components/design-system/Microinteractions';
import AIGuide from '@/components/design-system/AIGuide';

const IndexContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderActiveSection = () => {
    if (showGuidelines) {
      return <DesignGuidelines onNavigate={handleSectionClick} />;
    }

    if (showDocumentation) {
      return <DocumentationGuide />;
    }

    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={handleSectionClick} />;
      case 'colors':
        return <ColorTokens />;
      case 'typography':
        return <TypographyScale />;
      case 'components':
        return <ComponentLibrary />;
      case 'shadows':
        return <ShadowSystem />;
      case 'icons':
        return <IconLibrary />;
      case 'grid':
        return <GridSystem />;
      case 'navigation':
        return <NavigationSystem />;
      case 'forms':
        return <FormSystem />;
      case 'figma':
        return <FigmaTemplates />;
      case 'figma-integration':
        return <FigmaIntegration />;
      case 'atomic':
        return <AtomicDesign />;
      case 'naming':
        return <NamingConventions />;
      case 'ux-documentation':
        return <UXDocumentation />;
      case 'microinteractions':
        return <Microinteractions />;
      case 'ux-metrics':
        return <UXMetricsGuide onBack={() => handleGuidelinesClick()} />;
      case 'quick-access':
        return <QuickAccess />;
      case 'developer-guide':
        return <DeveloperGuide />;
      case 'ai-guide':
        return <AIGuide />;
      default:
        return <HomePage onNavigate={handleSectionClick} />;
    }
  };

  const handleGuidelinesClick = () => {
    setShowGuidelines(!showGuidelines);
    setShowDocumentation(false);
  };

  const handleDocumentationClick = () => {
    setShowDocumentation(!showDocumentation);
    setShowGuidelines(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowGuidelines(false);
    setShowDocumentation(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLogoClick = () => {
    setActiveSection('home');
    setShowGuidelines(false);
    setShowDocumentation(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onGuidelinesClick={handleGuidelinesClick}
        darkMode={darkMode}
        onDarkModeToggle={handleDarkModeToggle}
        onLogoClick={handleLogoClick}
        onNavigate={handleSectionClick}
      />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          showGuidelines={showGuidelines}
          showDocumentation={showDocumentation}
          onGuidelinesClick={handleGuidelinesClick}
          onDocumentationClick={handleDocumentationClick}
        />

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in">
              {renderActiveSection()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;
