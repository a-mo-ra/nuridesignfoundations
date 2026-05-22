
import React, { useState } from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { 
  Zap, Copy, Check, Heart, Star, User, Mail, Search, Settings, 
  Home, Bell, Calendar, Clock, Download, Upload, Edit, Trash,
  Play, Pause, Volume2, Camera, Image, Video, Music,
  Sun, Moon, Cloud, Umbrella, Zap as Lightning,
  Shield, Lock, Key, Eye, EyeOff, Flag
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const IconLibrary = () => {
  const { l } = useLanguage();
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const iconCategories = [
    {
      name: l('Interface', 'Interface'),
      description: l('Ícones para elementos de interface e navegação', 'Icons for interface elements and navigation'),
      icons: [
        { name: 'Home', component: Home, usage: l('Página inicial, navegação', 'Home page, navigation') },
        { name: 'Settings', component: Settings, usage: l('Configurações, opções', 'Settings, options') },
        { name: 'Search', component: Search, usage: l('Pesquisa, busca', 'Search') },
        { name: 'Bell', component: Bell, usage: l('Notificações, alertas', 'Notifications, alerts') },
        { name: 'User', component: User, usage: l('Perfil, conta de usuário', 'Profile, user account') },
        { name: 'Edit', component: Edit, usage: l('Editar, modificar', 'Edit, modify') },
        { name: 'Trash', component: Trash, usage: l('Excluir, remover', 'Delete, remove') },
        { name: 'Download', component: Download, usage: l('Baixar arquivo', 'Download file') },
        { name: 'Upload', component: Upload, usage: l('Enviar arquivo', 'Upload file') }
      ]
    },
    {
      name: l('Comunicação', 'Communication'),
      description: l('Ícones para contato e comunicação', 'Icons for contact and communication'),
      icons: [
        { name: 'Mail', component: Mail, usage: l('Email, mensagem', 'Email, message') },
        { name: 'Calendar', component: Calendar, usage: l('Agenda, eventos', 'Calendar, events') },
        { name: 'Clock', component: Clock, usage: l('Tempo, horário', 'Time, schedule') },
        { name: 'Flag', component: Flag, usage: l('Marcador, destaque', 'Marker, highlight') }
      ]
    },
    {
      name: l('Mídia', 'Media'),
      description: l('Ícones para conteúdo multimídia', 'Icons for multimedia content'),
      icons: [
        { name: 'Play', component: Play, usage: l('Reproduzir mídia', 'Play media') },
        { name: 'Pause', component: Pause, usage: l('Pausar reprodução', 'Pause playback') },
        { name: 'Volume2', component: Volume2, usage: l('Controle de áudio', 'Audio control') },
        { name: 'Camera', component: Camera, usage: l('Câmera, foto', 'Camera, photo') },
        { name: 'Image', component: Image, usage: l('Imagem, galeria', 'Image, gallery') },
        { name: 'Video', component: Video, usage: l('Vídeo, filmagem', 'Video, footage') },
        { name: 'Music', component: Music, usage: l('Música, áudio', 'Music, audio') }
      ]
    },
    {
      name: l('Status & Feedback', 'Status & Feedback'),
      description: l('Ícones para estados e feedback do sistema', 'Icons for system states and feedback'),
      icons: [
        { name: 'Heart', component: Heart, usage: l('Favorito, curtir', 'Favorite, like') },
        { name: 'Star', component: Star, usage: l('Avaliação, destaque', 'Rating, highlight') },
        { name: 'Check', component: Check, usage: l('Sucesso, confirmação', 'Success, confirmation') },
        { name: 'Zap', component: Lightning, usage: l('Energia, rapidez', 'Energy, speed') },
        { name: 'Shield', component: Shield, usage: l('Segurança, proteção', 'Security, protection') },
        { name: 'Lock', component: Lock, usage: l('Bloqueado, privado', 'Locked, private') },
        { name: 'Key', component: Key, usage: l('Chave, acesso', 'Key, access') }
      ]
    },
    {
      name: l('Clima & Natureza', 'Weather & Nature'),
      description: l('Ícones relacionados ao clima e natureza', 'Icons related to weather and nature'),
      icons: [
        { name: 'Sun', component: Sun, usage: l('Sol, dia, modo claro', 'Sun, day, light mode') },
        { name: 'Moon', component: Moon, usage: l('Lua, noite, modo escuro', 'Moon, night, dark mode') },
        { name: 'Cloud', component: Cloud, usage: l('Nuvem, armazenamento', 'Cloud, storage') },
        { name: 'Umbrella', component: Umbrella, usage: l('Chuva, proteção', 'Rain, protection') }
      ]
    },
    {
      name: l('Visualização', 'Visibility'),
      description: l('Ícones para controle de visualização', 'Icons for visibility control'),
      icons: [
        { name: 'Eye', component: Eye, usage: l('Mostrar, visualizar', 'Show, view') },
        { name: 'EyeOff', component: EyeOff, usage: l('Ocultar, senha', 'Hide, password') }
      ]
    }
  ];

  const copyIconCode = async (iconName: string) => {
    const importCode = `import { ${iconName} } from 'lucide-react';`;
    const usageCode = `<${iconName} size={20} className="text-neutral-600" />`;
    const fullCode = `${importCode}\n\n// ${l('Uso', 'Usage')}:\n${usageCode}`;
    
    try {
      await navigator.clipboard.writeText(fullCode);
      setCopiedIcon(iconName);
      toast({
        title: l('Copiado!', 'Copied!'),
        description: l(`Código do ícone ${iconName} copiado para a área de transferência.`, `Code for icon ${iconName} copied to clipboard.`),
      });
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      toast({
        title: l('Erro', 'Error'),
        description: l('Não foi possível copiar o código.', 'Could not copy the code.'),
        variant: "destructive"
      });
    }
  };

  const filteredCategories = iconCategories.map(category => ({
    ...category,
    icons: category.icons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.usage.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.icons.length > 0);

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">{l('Ícones', 'Icons')}</h1>
        <p className="text-lg text-muted-foreground">{l('Coleção completa com Lucide React e ícones customizados', 'Complete collection with Lucide React and custom icons')}</p>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder={l('Pesquisar ícones...', 'Search icons...')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
          />
        </div>
      </div>

      {/* Icon Categories */}
      {filteredCategories.map((category) => (
        <div key={category.name} className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{category.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">{category.description}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.icons.map((icon) => {
              const IconComponent = icon.component;
              return (
                <div
                  key={icon.name}
                  className="group p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-elevation-2 hover:border-brand-200 dark:hover:border-brand-600 transition-all duration-200 cursor-pointer"
                  onClick={() => copyIconCode(icon.name)}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-brand-50 dark:group-hover:bg-brand-900 transition-colors duration-200">
                      <IconComponent 
                        size={24} 
                        className="text-neutral-600 dark:text-neutral-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200" 
                      />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xs font-medium text-neutral-800 dark:text-white mb-1">{icon.name}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{icon.usage}</p>
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {copiedIcon === icon.name ? (
                        <Check size={14} className="text-success-500" />
                      ) : (
                        <Copy size={14} className="text-neutral-400 dark:text-neutral-500" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Icon Sizes Demo */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{l('Tamanhos de Ícones', 'Icon Sizes')}</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { size: 16, name: 'Small', usage: l('Texto inline, rótulos', 'Inline text, labels') },
            { size: 20, name: 'Medium', usage: l('Botões, navegação', 'Buttons, navigation') },
            { size: 24, name: 'Large', usage: l('Headers, destaque', 'Headers, highlights') },
            { size: 32, name: 'Extra Large', usage: l('Seções hero, placeholders', 'Hero sections, placeholders') }
          ].map((item) => (
            <div key={item.size} className="text-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
              <div className="w-16 h-16 bg-neutral-50 dark:bg-neutral-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Heart size={item.size} className="text-brand-500" />
              </div>
              <h4 className="font-medium text-neutral-800 dark:text-white mb-1">{item.name}</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-2">{item.size}px</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.usage}</p>
              <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded mt-2 block text-neutral-700 dark:text-neutral-300">
                size={'{' + item.size + '}'}
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white dark:from-neutral-900 dark:to-black rounded-xl p-6 border border-brand-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{l('Diretrizes de Uso', 'Usage Guidelines')}</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">{l('Consistência', 'Consistency')}</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• {l('Use tamanhos padronizados (16, 20, 24, 32px)', 'Use standardized sizes (16, 20, 24, 32px)')}</li>
              <li>• {l('Mantenha o mesmo estilo visual', 'Maintain consistent visual style')}</li>
              <li>• {l('Alinhe ícones com texto adjacente', 'Align icons with adjacent text')}</li>
              <li>• {l('Use cores semânticas apropriadas', 'Use appropriate semantic colors')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">{l('Acessibilidade', 'Accessibility')}</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• {l('Adicione aria-label quando necessário', 'Add aria-label when necessary')}</li>
              <li>• {l('Use title para tooltips informativos', 'Use title for informative tooltips')}</li>
              <li>• {l('Garanta contraste suficiente', 'Ensure sufficient contrast')}</li>
              <li>• {l('Teste com leitores de tela', 'Test with screen readers')}</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default IconLibrary;
