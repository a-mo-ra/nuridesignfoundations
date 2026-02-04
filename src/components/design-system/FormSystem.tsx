import React, { useState } from 'react';
import { FileText, Copy, Check, AlertCircle, X, Search, Calendar, Eye, EyeOff } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const FormSystem = () => {
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<string | null>(null);

  const copyToClipboard = async (code: string, componentName: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedComponent(componentName);
      toast({
        title: "Copiado!",
        description: `Código do ${componentName} copiado para área de transferência.`,
      });
      setTimeout(() => setCopiedComponent(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o código.",
        variant: "destructive"
      });
    }
  };

  const inputComponents = [
    {
      name: 'Text Input',
      component: (
        <div className="w-full max-w-sm">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
        </div>
      ),
      figmaSpecs: {
        width: 'Fill container / 320px min',
        height: '48px',
        padding: '12px 16px',
        borderRadius: '8px',
        states: 'Default, Focus, Error, Disabled'
      },
      code: `<input
  type="text"
  placeholder="Digite seu nome"
  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
/>`
    },
    {
      name: 'Text Input with Error',
      component: (
        <div className="w-full max-w-sm">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full px-4 py-3 border border-error-500 rounded-lg focus:ring-2 focus:ring-error-500 focus:border-error-500 transition-all duration-200 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
          <div className="flex items-center gap-2 mt-2 text-error-600 text-sm">
            <AlertCircle size={16} />
            <span>Por favor, insira um email válido</span>
          </div>
        </div>
      ),
      figmaSpecs: {
        width: 'Fill container / 320px min',
        height: '48px + 24px error text',
        padding: '12px 16px',
        borderRadius: '8px',
        errorColor: '#ef4444'
      },
      code: `<input
  type="email"
  className="w-full px-4 py-3 border border-error-500 rounded-lg focus:ring-2 focus:ring-error-500"
/>
<div className="flex items-center gap-2 mt-2 text-error-600 text-sm">
  <AlertCircle size={16} />
  <span>Por favor, insira um email válido</span>
</div>`
    },
    {
      name: 'Search Input',
      component: (
        <div className="w-full max-w-sm relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
        </div>
      ),
      figmaSpecs: {
        width: 'Hug content / 280px min',
        height: '48px',
        padding: '12px 16px 12px 40px',
        iconSize: '18px',
        iconPosition: 'Left 12px'
      },
      code: `<div className="relative">
  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
  <input
    type="text"
    placeholder="Pesquisar..."
    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500"
  />
</div>`
    },
    {
      name: 'Password Input',
      component: (
        <div className="w-full max-w-sm">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-3 pr-12 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      ),
      figmaSpecs: {
        width: 'Fill container / 320px min',
        height: '48px',
        padding: '12px 44px 12px 16px',
        iconSize: '18px',
        iconPosition: 'Right 12px'
      },
      code: `<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500"
  />
  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>`
    }
  ];

  const advancedComponents = [
    {
      name: 'Modal',
      component: (
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
          >
            Abrir Modal
          </button>
          
          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 max-w-md w-full mx-4 shadow-elevation-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Título do Modal</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  Este é o conteúdo do modal. Você pode colocar qualquer conteúdo aqui.
                </p>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
      figmaSpecs: {
        overlay: 'Fill screen, 50% black opacity',
        modal: '400px x auto, Center aligned',
        padding: '24px',
        borderRadius: '12px',
        shadow: 'Elevation 4'
      },
      code: `<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-elevation-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Título do Modal</h3>
      <button className="p-1 text-neutral-400 hover:text-neutral-600">
        <X size={20} />
      </button>
    </div>
    <p className="text-neutral-600 mb-6">Conteúdo do modal...</p>
    <div className="flex gap-3 justify-end">
      <button className="px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg">
        Cancelar
      </button>
      <button className="px-4 py-2 bg-brand-500 text-white rounded-lg">
        Confirmar
      </button>
    </div>
  </div>
</div>`
    },
    {
      name: 'Toast Notification',
      component: (
        <div>
          <button
            onClick={() => {
              setShowToast(true);
              setTimeout(() => setShowToast(false), 3000);
            }}
            className="px-4 py-2 bg-success-500 text-white rounded-lg hover:bg-success-600"
          >
            Mostrar Toast
          </button>
          
          {showToast && (
            <div className="fixed top-4 right-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-elevation-3 z-50 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-neutral-900 dark:text-white text-sm">Sucesso!</h4>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">Sua ação foi realizada com sucesso.</p>
                </div>
                <button
                  onClick={() => setShowToast(false)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      ),
      figmaSpecs: {
        width: '320px max',
        height: 'Auto (min 64px)',
        padding: '16px',
        borderRadius: '8px',
        position: 'Top right, 16px margin'
      },
      code: `<div className="fixed top-4 right-4 bg-white border rounded-lg p-4 shadow-elevation-3 z-50 max-w-sm">
  <div className="flex items-start gap-3">
    <div className="w-5 h-5 bg-success-500 rounded-full flex items-center justify-center">
      <Check size={12} className="text-white" />
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-neutral-900 text-sm">Sucesso!</h4>
      <p className="text-neutral-600 text-sm">Sua ação foi realizada com sucesso.</p>
    </div>
  </div>
</div>`
    },
    {
      name: 'Accordion',
      component: (
        <div className="w-full max-w-md space-y-2">
          {['Pergunta 1', 'Pergunta 2', 'Pergunta 3'].map((item, index) => (
            <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <button
                onClick={() => setAccordionOpen(accordionOpen === item ? null : item)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800"
              >
                <span className="font-medium text-neutral-900 dark:text-white">{item}</span>
                <span className={`transform transition-transform ${accordionOpen === item ? 'rotate-180' : ''} text-neutral-600 dark:text-neutral-400`}>
                  ▼
                </span>
              </button>
              {accordionOpen === item && (
                <div className="px-4 pb-4 text-neutral-600 dark:text-neutral-300 text-sm">
                  Esta é a resposta para {item.toLowerCase()}. Aqui você pode colocar qualquer conteúdo explicativo.
                </div>
              )}
            </div>
          ))}
        </div>
      ),
      figmaSpecs: {
        width: 'Fill container / 400px max',
        itemHeight: '56px collapsed, Auto expanded',
        padding: '16px',
        borderRadius: '8px',
        spacing: '8px between items'
      },
      code: `<div className="border border-neutral-200 rounded-lg">
  <button
    onClick={() => setOpen(!open)}
    className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50"
  >
    <span className="font-medium text-neutral-900">Pergunta</span>
    <span className={transform transition-transform \${open ? 'rotate-180' : ''}}>
      ▼
    </span>
  </button>
  {open && (
    <div className="px-4 pb-4 text-neutral-600 text-sm">
      Resposta...
    </div>
  )}
</div>`
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Formulários</h1>
        <p className="text-lg text-muted-foreground">Inputs, modais, toasts, accordions e componentes interativos</p>
      </div>

      {/* Input Components */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Campos de Input</h3>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {inputComponents.map((input) => (
            <div key={input.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-neutral-800 dark:text-white">{input.name}</h4>
                <button
                  onClick={() => copyToClipboard(input.code, input.name)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-200"
                >
                  {copiedComponent === input.name ? (
                    <Check size={12} />
                  ) : (
                    <Copy size={12} />
                  )}
                  Copiar código
                </button>
              </div>
              
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
                {input.component}
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-3 rounded text-xs">
                <strong className="text-neutral-800 dark:text-white">Figma Specs:</strong>
                <div className="mt-1 space-y-1 text-neutral-600 dark:text-neutral-300">
                  <div>Width: {input.figmaSpecs.width}</div>
                  <div>Height: {input.figmaSpecs.height}</div>
                  <div>Padding: {input.figmaSpecs.padding}</div>
                  {input.figmaSpecs.borderRadius && <div>Border Radius: {input.figmaSpecs.borderRadius}</div>}
                  {input.figmaSpecs.states && <div>States: {input.figmaSpecs.states}</div>}
                  {input.figmaSpecs.errorColor && <div>Error Color: {input.figmaSpecs.errorColor}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Components */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Componentes Avançados</h3>
        
        <div className="space-y-8">
          {advancedComponents.map((comp) => (
            <div key={comp.name} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-foreground">{comp.name}</h4>
                <button
                  onClick={() => copyToClipboard(comp.code, comp.name)}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-200"
                >
                  {copiedComponent === comp.name ? (
                    <Check size={12} />
                  ) : (
                    <Copy size={12} />
                  )}
                  Copiar código
                </button>
              </div>
              
              <div className="mb-4">
                {comp.component}
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-3 rounded text-xs">
                <strong className="text-neutral-800 dark:text-white">Figma Specs:</strong>
                <div className="mt-1 space-y-1 text-neutral-600 dark:text-neutral-300">
                  {Object.entries(comp.figmaSpecs).map(([key, value]) => (
                    <div key={key}>{key}: {value}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Best Practices */}
      <div className="bg-gradient-to-br from-brand-50 to-white dark:from-neutral-900 dark:to-black rounded-xl p-6 border border-brand-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Boas Práticas de Formulários</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Usabilidade</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Labels claros e descritivos</li>
              <li>• Feedback imediato para erros</li>
              <li>• Placeholders informativos</li>
              <li>• Área de toque mínima 44px (mobile)</li>
              <li>• Estados visuais para focus/hover</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Acessibilidade</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Associação label-input adequada</li>
              <li>• Mensagens de erro descritivas</li>
              <li>• Contraste suficiente (4.5:1 mínimo)</li>
              <li>• Navegação por teclado funcional</li>
              <li>• ARIA labels quando necessário</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSystem;
