
import React, { useState } from 'react';
import { 
  Zap, Copy, Check, Heart, Star, User, Mail, Search, Settings, 
  Home, Bell, Calendar, Clock, Download, Upload, Edit, Trash,
  Play, Pause, Volume2, Camera, Image, Video, Music,
  Sun, Moon, Cloud, Umbrella, Zap as Lightning,
  Shield, Lock, Key, Eye, EyeOff, Flag
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const IconLibrary = () => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const iconCategories = [
    {
      name: 'Interface',
      description: 'Ícones para elementos de interface e navegação',
      icons: [
        { name: 'Home', component: Home, usage: 'Página inicial, navegação' },
        { name: 'Settings', component: Settings, usage: 'Configurações, opções' },
        { name: 'Search', component: Search, usage: 'Pesquisa, busca' },
        { name: 'Bell', component: Bell, usage: 'Notificações, alertas' },
        { name: 'User', component: User, usage: 'Perfil, conta de usuário' },
        { name: 'Edit', component: Edit, usage: 'Editar, modificar' },
        { name: 'Trash', component: Trash, usage: 'Excluir, remover' },
        { name: 'Download', component: Download, usage: 'Baixar arquivo' },
        { name: 'Upload', component: Upload, usage: 'Enviar arquivo' }
      ]
    },
    {
      name: 'Comunicação',
      description: 'Ícones para contato e comunicação',
      icons: [
        { name: 'Mail', component: Mail, usage: 'Email, mensagem' },
        { name: 'Calendar', component: Calendar, usage: 'Agenda, eventos' },
        { name: 'Clock', component: Clock, usage: 'Tempo, horário' },
        { name: 'Flag', component: Flag, usage: 'Marcador, destaque' }
      ]
    },
    {
      name: 'Mídia',
      description: 'Ícones para conteúdo multimídia',
      icons: [
        { name: 'Play', component: Play, usage: 'Reproduzir mídia' },
        { name: 'Pause', component: Pause, usage: 'Pausar reprodução' },
        { name: 'Volume2', component: Volume2, usage: 'Controle de áudio' },
        { name: 'Camera', component: Camera, usage: 'Câmera, foto' },
        { name: 'Image', component: Image, usage: 'Imagem, galeria' },
        { name: 'Video', component: Video, usage: 'Vídeo, filmagem' },
        { name: 'Music', component: Music, usage: 'Música, áudio' }
      ]
    },
    {
      name: 'Status & Feedback',
      description: 'Ícones para estados e feedback do sistema',
      icons: [
        { name: 'Heart', component: Heart, usage: 'Favorito, curtir' },
        { name: 'Star', component: Star, usage: 'Avaliação, destaque' },
        { name: 'Check', component: Check, usage: 'Sucesso, confirmação' },
        { name: 'Zap', component: Lightning, usage: 'Energia, rapidez' },
        { name: 'Shield', component: Shield, usage: 'Segurança, proteção' },
        { name: 'Lock', component: Lock, usage: 'Bloqueado, privado' },
        { name: 'Key', component: Key, usage: 'Chave, acesso' }
      ]
    },
    {
      name: 'Clima & Natureza',
      description: 'Ícones relacionados ao clima e natureza',
      icons: [
        { name: 'Sun', component: Sun, usage: 'Sol, dia, modo claro' },
        { name: 'Moon', component: Moon, usage: 'Lua, noite, modo escuro' },
        { name: 'Cloud', component: Cloud, usage: 'Nuvem, armazenamento' },
        { name: 'Umbrella', component: Umbrella, usage: 'Chuva, proteção' }
      ]
    },
    {
      name: 'Visualização',
      description: 'Ícones para controle de visualização',
      icons: [
        { name: 'Eye', component: Eye, usage: 'Mostrar, visualizar' },
        { name: 'EyeOff', component: EyeOff, usage: 'Ocultar, senha' }
      ]
    }
  ];

  const copyIconCode = async (iconName: string) => {
    const importCode = `import { ${iconName} } from 'lucide-react';`;
    const usageCode = `<${iconName} size={20} className="text-neutral-600" />`;
    const fullCode = `${importCode}\n\n// Uso:\n${usageCode}`;
    
    try {
      await navigator.clipboard.writeText(fullCode);
      setCopiedIcon(iconName);
      toast({
        title: "Copiado!",
        description: `Código do ícone ${iconName} copiado para a área de transferência.`,
      });
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o código.",
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
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Ícones</h1>
        <p className="text-lg text-muted-foreground">Coleção completa com Lucide React e ícones customizados</p>
      </div>

      {/* Search */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Pesquisar ícones..."
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
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Tamanhos de Ícones</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { size: 16, name: 'Small', usage: 'Inline text, labels' },
            { size: 20, name: 'Medium', usage: 'Botões, navegação' },
            { size: 24, name: 'Large', usage: 'Headers, destaque' },
            { size: 32, name: 'Extra Large', usage: 'Hero sections, placeholders' }
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
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Consistência</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Use tamanhos padronizados (16, 20, 24, 32px)</li>
              <li>• Mantenha o mesmo estilo visual</li>
              <li>• Alinhe ícones com texto adjacente</li>
              <li>• Use cores semânticas apropriadas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Acessibilidade</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Adicione aria-label quando necessário</li>
              <li>• Use title para tooltips informativos</li>
              <li>• Garanta contraste suficiente</li>
              <li>• Teste com leitores de tela</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default IconLibrary;
