import React, { useState } from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Check, Bell, Heart, Loader2, ChevronDown, ChevronRight,
  Smartphone, Tablet, Monitor, ExternalLink, Copy, Zap, Eye, MousePointer,
  Sparkles, Timer, Accessibility, Search, Home, User, Settings, Menu,
  ArrowRight, Star, Plus, Minus, X, Play, Pause, Volume2, Send, 
  ThumbsUp, Bookmark, Share2, MoreHorizontal, RefreshCw, Download,
  ChevronUp, ArrowLeft, Filter, Grid, List, ToggleLeft, ToggleRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// ─── Code Accordion ────────────────────────────────────────
const CodeAccordion = ({ code, title = 'Código' }: { code: string; title?: string }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast({ title: 'Copiado!' });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-3 border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2.5 bg-muted/50 text-sm font-medium text-foreground hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-2">
          {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          {title}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); handleCopy(); }}
          className="flex items-center gap-1 px-2 py-1 rounded bg-black text-white text-xs hover:bg-black/80 transition-colors"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </button>
      {open && (
        <pre className="p-4 bg-neutral-950 text-neutral-200 text-xs overflow-x-auto font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

// ─── Example 1: Cart Button ────────────────────────────────
const CartButtonExample = () => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors overflow-hidden ${
        added ? 'bg-green-600 text-white' : 'bg-primary text-primary-foreground'
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {added ? (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              <Check size={18} />
            </motion.span>
            Adicionado!
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <ShoppingCart size={18} />
            Adicionar ao Carrinho
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const cartCode = `const CartButton = () => {
  const [added, setAdded] = useState(false);
  return (
    <motion.button
      onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 2000); }}
      className={added ? 'bg-green-600' : 'bg-primary'}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {added ? (
          <motion.span key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <Check /> Adicionado!
          </motion.span>
        ) : (
          <motion.span key="add" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <ShoppingCart /> Adicionar ao Carrinho
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};`;

// ─── Example 2: Bell Notification ──────────────────────────
const BellNotificationExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="flex items-center gap-4">
      <motion.button
        onClick={handleClick}
        className="relative p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={count > 0 ? {
            rotate: [0, -15, 15, -10, 10, -5, 5, 0],
          } : {}}
          transition={{ duration: 0.6 }}
          key={count}
        >
          <Bell size={24} className="text-foreground" />
        </motion.div>
        <AnimatePresence>
          {count > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            >
              {count}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
      <button onClick={() => setCount(0)} className="text-xs text-muted-foreground hover:text-foreground">Reset</button>
    </div>
  );
};

const bellCode = `const BellNotification = () => {
  const [count, setCount] = useState(0);
  return (
    <motion.button onClick={() => setCount(c => c + 1)} whileTap={{ scale: 0.9 }}>
      <motion.div
        animate={count > 0 ? { rotate: [0, -15, 15, -10, 10, -5, 5, 0] } : {}}
        transition={{ duration: 0.6 }}
        key={count}
      >
        <Bell size={24} />
      </motion.div>
      <AnimatePresence>
        {count > 0 && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            className="badge">{count}</motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};`;

// ─── Example 3: Favorite Toggle ────────────────────────────
const FavoriteToggleExample = () => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.button
      onClick={() => setLiked(!liked)}
      className="relative p-3"
      whileTap={{ scale: 0.8 }}
    >
      <motion.div
        animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          size={32}
          className={liked ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}
        />
      </motion.div>
      <AnimatePresence>
        {liked && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-red-400"
                style={{ top: '50%', left: '50%' }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 28,
                  y: Math.sin((i * Math.PI * 2) / 8) * 28,
                  opacity: 0,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const favoriteCode = `const FavoriteToggle = () => {
  const [liked, setLiked] = useState(false);
  return (
    <motion.button onClick={() => setLiked(!liked)} whileTap={{ scale: 0.8 }}>
      <motion.div animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}>
        <Heart className={liked ? 'text-red-500 fill-red-500' : 'text-muted-foreground'} />
      </motion.div>
      <AnimatePresence>
        {liked && Array.from({ length: 8 }).map((_, i) => (
          <motion.span key={i} className="particle"
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: Math.cos((i * Math.PI * 2) / 8) * 28,
              y: Math.sin((i * Math.PI * 2) / 8) * 28,
              opacity: 0, scale: 0,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};`;

// ─── Example 4: Smart Loaders ──────────────────────────────
const SmartLoaderExample = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setDone(false);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={loading}
      className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm min-w-[180px] h-[44px] overflow-hidden"
      whileTap={!loading ? { scale: 0.95 } : {}}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </motion.span>
        ) : done ? (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Check size={18} />
            Enviado!
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Send size={18} />
            Enviar
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const loaderCode = `const SmartLoader = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); setTimeout(() => setDone(false), 2000); }, 2000);
  };
  return (
    <motion.button onClick={handleClick} disabled={loading}
      className="min-w-[180px] h-[44px]" whileTap={!loading ? { scale: 0.95 } : {}}>
      <AnimatePresence mode="wait">
        {loading ? <motion.span key="l"><Loader2 className="animate-spin" /> Enviando...</motion.span>
         : done ? <motion.span key="d"><Check /> Enviado!</motion.span>
         : <motion.span key="i"><Send /> Enviar</motion.span>}
      </AnimatePresence>
    </motion.button>
  );
};`;

// ─── Example 5: Hover States ───────────────────────────────
const HoverStatesExample = () => (
  <div className="flex flex-wrap gap-4">
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="px-5 py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm cursor-pointer"
    >
      Scale
    </motion.div>
    <motion.div
      whileHover={{ rotate: 3, scale: 1.02 }}
      className="px-5 py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm cursor-pointer"
    >
      Rotate
    </motion.div>
    <motion.div
      whileHover={{ y: -4 }}
      className="px-5 py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
    >
      Lift
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(77,12,131,0.4)' }}
      className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm cursor-pointer"
    >
      Glow
    </motion.div>
  </div>
);

const hoverCode = `{/* Scale */}
<motion.div whileHover={{ scale: 1.08 }}>Scale</motion.div>

{/* Rotate */}
<motion.div whileHover={{ rotate: 3, scale: 1.02 }}>Rotate</motion.div>

{/* Lift */}
<motion.div whileHover={{ y: -4 }}>Lift</motion.div>

{/* Glow */}
<motion.div whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(77,12,131,0.4)' }}>Glow</motion.div>`;

// ─── Device Frame Component ────────────────────────────────
const DeviceFrame = ({ type, children }: { type: 'mobile' | 'tablet' | 'desktop'; children: React.ReactNode }) => {
  const sizes = {
    mobile: 'w-[220px] h-[420px]',
    tablet: 'w-[380px] h-[280px]',
    desktop: 'w-full max-w-[560px] h-[340px]',
  };

  return (
    <div className={`${sizes[type]} bg-background border-2 border-muted-foreground/20 rounded-2xl overflow-hidden shadow-xl flex flex-col`}>
      {/* Browser / device chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/50 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 h-5 bg-muted rounded-md" />
      </div>
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

// ─── Mobile Interactive Screen ─────────────────────────────
const MobileInteractiveScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const tabs = [Home, Search, Bell, User];

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/20" />
          <div className="w-16 h-3 bg-muted rounded" />
        </div>
        <motion.button whileTap={{ scale: 0.9 }}>
          <MoreHorizontal size={16} className="text-muted-foreground" />
        </motion.button>
      </div>

      {/* Content */}
      <div className="flex-1 p-3 space-y-3 overflow-auto">
        {/* Card with interactions */}
        <motion.div
          className="rounded-xl border border-border p-3 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-full h-20 bg-muted rounded-lg" />
          <div className="w-3/4 h-3 bg-muted rounded" />
          <div className="w-1/2 h-2 bg-muted/70 rounded" />
          <div className="flex items-center gap-3 pt-1">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setLiked(!liked)}
            >
              <Heart size={16} className={liked ? 'text-red-500 fill-red-500' : 'text-muted-foreground'} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark size={16} className={bookmarked ? 'text-primary fill-primary' : 'text-muted-foreground'} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.8 }}>
              <Share2 size={16} className="text-muted-foreground" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="rounded-xl border border-border p-3 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-full h-16 bg-muted rounded-lg" />
          <div className="w-2/3 h-3 bg-muted rounded" />
        </motion.div>
      </div>

      {/* Bottom Nav with motion */}
      <div className="flex items-center justify-around border-t border-border py-2 px-4 bg-card">
        {tabs.map((Icon, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveTab(i)}
            whileTap={{ scale: 0.85 }}
            className="p-2 rounded-lg relative"
          >
            <Icon size={18} className={activeTab === i ? 'text-primary' : 'text-muted-foreground'} />
            {activeTab === i && (
              <motion.div
                layoutId="mobile-tab-indicator"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// ─── Tablet Interactive Screen ─────────────────────────────
const TabletInteractiveScreen = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const items = ['Dashboard', 'Analytics', 'Settings', 'Users'];

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <div className="w-14 bg-card border-r border-border flex flex-col items-center py-3 gap-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setExpanded(!expanded)}
          className="p-2 rounded-lg hover:bg-muted"
        >
          <Menu size={14} className="text-muted-foreground" />
        </motion.button>
        {[Home, MoreHorizontal, Settings, User].map((Icon, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedItem(i)}
            className={`p-2 rounded-lg ${selectedItem === i ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}
          >
            <Icon size={14} />
          </motion.button>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <div className="text-xs font-medium text-foreground">{items[selectedItem]}</div>
          <motion.button
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="p-1.5 rounded-md hover:bg-muted"
          >
            <RefreshCw size={12} className="text-muted-foreground" />
          </motion.button>
        </div>
        <div className="flex-1 p-3 grid grid-cols-2 gap-2 content-start">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              className="h-16 rounded-lg border border-border p-2 cursor-pointer hover:border-primary/30"
              whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="w-full h-2 bg-muted rounded mb-1.5" />
              <div className="w-3/4 h-2 bg-muted/60 rounded" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Desktop Interactive Screen ────────────────────────────
const DesktopInteractiveScreen = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex h-full bg-background">
      {/* Sidebar */}
      <div className="w-40 bg-card border-r border-border p-3 space-y-1">
        {['Dashboard', 'Projects', 'Tasks', 'Reports', 'Settings'].map((label, i) => (
          <motion.div
            key={label}
            className={`px-2 py-1.5 rounded-md text-xs cursor-pointer ${i === 0 ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-muted'}`}
            whileHover={{ x: 4 }}
          >
            {label}
          </motion.div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <div className="text-xs font-medium text-foreground">Dashboard</div>
          <div className="flex items-center gap-1">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setViewMode('grid')}
              className={`p-1 rounded ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
            >
              <Grid size={12} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setViewMode('list')}
              className={`p-1 rounded ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
            >
              <List size={12} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { setShowToast(true); setTimeout(() => setShowToast(false), 2000); }}
              className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-[10px] rounded font-medium"
            >
              + Novo
            </motion.button>
          </div>
        </div>

        <div className="flex-1 p-3 overflow-auto relative">
          <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-2' : 'space-y-1.5'}>
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <motion.div
                key={i}
                className={`rounded-lg border border-border p-2 cursor-pointer ${viewMode === 'list' ? 'flex items-center gap-3' : ''}`}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -2, borderColor: 'hsl(var(--primary))' }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="w-full h-8 bg-muted rounded mb-1.5" />
                    <div className="w-2/3 h-2 bg-muted rounded" />
                  </>
                ) : (
                  <>
                    <div className="w-6 h-6 bg-muted rounded" />
                    <div className="w-20 h-2 bg-muted rounded" />
                    <div className="flex-1" />
                    <AnimatePresence>
                      {hoveredCard === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex gap-1"
                        >
                          <div className="w-4 h-4 rounded bg-muted" />
                          <div className="w-4 h-4 rounded bg-muted" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 20, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 20, x: '-50%' }}
                className="absolute bottom-2 left-1/2 bg-foreground text-background text-[10px] px-3 py-1.5 rounded-lg font-medium shadow-lg"
              >
                ✓ Item criado com sucesso
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page Component ───────────────────────────────────
const Microinteractions = () => {
  const { language } = useLanguage();
  const isPt = language === 'pt';

  const examples = [
    {
      title: 'Cart Button',
      desc: isPt ? 'Transição de "Adicionar" para um check de "Sucesso"' : '"Add" to "Success" check transition',
      component: <CartButtonExample />,
      code: cartCode,
    },
    {
      title: 'Bell Notification',
      desc: isPt ? 'Ícone com efeito wiggle e badge numérico' : 'Icon with wiggle effect and numeric badge',
      component: <BellNotificationExample />,
      code: bellCode,
    },
    {
      title: 'Favorite Toggle',
      desc: isPt ? 'Coração com animação de explosão de partículas' : 'Heart with particle burst animation',
      component: <FavoriteToggleExample />,
      code: favoriteCode,
    },
    {
      title: 'Smart Loaders',
      desc: isPt ? 'Botão com spinner interno sem alterar dimensões' : 'Button with internal spinner, no dimension change',
      component: <SmartLoaderExample />,
      code: loaderCode,
    },
    {
      title: 'Hover States',
      desc: isPt ? 'Variedades de escala, brilho e rotação suave' : 'Scale, glow and smooth rotation varieties',
      component: <HoverStatesExample />,
      code: hoverCode,
    },
  ];

  const references = [
    { title: 'Creating Usability with Motion - Medium', url: 'https://medium.com/ux-in-motion/creating-usability-with-motion-the-ux-in-motion-manifesto-a87a4584ddc' },
    { title: 'The Role of Animation in UX - Nielsen Norman Group', url: 'https://www.nngroup.com/articles/animation-usability/' },
    { title: 'Microinteractions: Designing with Details - Dan Saffer', url: 'https://microinteractions.com/' },
    { title: 'Material Design Motion Guide - Google', url: 'https://m3.material.io/styles/motion/overview' },
    { title: 'Framer Motion Documentation', url: 'https://www.framer.com/motion/' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div>
        <p className="text-sm font-medium text-primary mb-2">
          {isPt ? 'Padrões' : 'Patterns'}
        </p>
        <h1 className="text-3xl font-bold text-foreground mb-3">
          {isPt ? 'Microinterações' : 'Microinteractions'}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          {isPt
            ? 'Animações e microinterações que elevam a experiência do usuário. Guia completo com princípios, exemplos funcionais e boas práticas para interfaces responsivas.'
            : 'Animations and microinteractions that elevate user experience. Complete guide with principles, functional examples and best practices for responsive interfaces.'}
        </p>
      </div>

      {/* What is Motion vs Microinteractions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border p-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Motion</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isPt
              ? 'Motion Design refere-se ao uso de animações para guiar o usuário, comunicar hierarquia e criar transições fluídas entre estados da interface. É sobre o "como" os elementos se movem no espaço e no tempo.'
              : 'Motion Design refers to using animations to guide users, communicate hierarchy and create fluid transitions between interface states. It\'s about "how" elements move in space and time.'}
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• {isPt ? 'Transições de página' : 'Page transitions'}</p>
            <p>• {isPt ? 'Animações de entrada/saída' : 'Enter/exit animations'}</p>
            <p>• {isPt ? 'Hierarquia visual dinâmica' : 'Dynamic visual hierarchy'}</p>
          </div>
        </div>
        <div className="rounded-xl border border-border p-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
              <MousePointer size={20} className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">{isPt ? 'Microinterações' : 'Microinteractions'}</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isPt
              ? 'Microinterações são pequenos momentos de feedback que ocorrem em resposta a uma ação do usuário. Elas tornam a interface humana, comunicam estados e criam deleite. São compostas por: trigger, rules, feedback e loops.'
              : 'Microinteractions are small feedback moments that occur in response to user actions. They make the interface human, communicate states and create delight. Composed of: trigger, rules, feedback and loops.'}
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• {isPt ? 'Feedback de botões' : 'Button feedback'}</p>
            <p>• {isPt ? 'Toggle states' : 'Toggle states'}</p>
            <p>• {isPt ? 'Notificações e badges' : 'Notifications and badges'}</p>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">{isPt ? 'Boas Práticas' : 'Best Practices'}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: Timer, title: isPt ? 'Timing Preciso' : 'Precise Timing',
              desc: isPt ? 'Use entre 200-500ms. Animações abaixo de 100ms são imperceptíveis. Acima de 1s causam sensação de lentidão.' : 'Use 200-500ms. Below 100ms is imperceptible. Above 1s feels slow.',
              type: 'success' as const,
            },
            {
              icon: Accessibility, title: isPt ? 'Acessibilidade' : 'Accessibility',
              desc: isPt ? 'Respeite prefers-reduced-motion. Nunca use animações como único canal de comunicação. Garanta alternativas estáticas.' : 'Respect prefers-reduced-motion. Never use animations as sole communication channel.',
              type: 'warning' as const,
            },
            {
              icon: Sparkles, title: isPt ? 'Propósito' : 'Purpose',
              desc: isPt ? 'Toda animação deve ter uma função: guiar, confirmar, informar ou criar deleite. Se não tem propósito, remova.' : 'Every animation must have a function: guide, confirm, inform or delight. If purposeless, remove it.',
              type: 'error' as const,
            },
          ].map((item, i) => {
            const colors = {
              success: 'border-green-500/30 bg-green-500/5',
              warning: 'border-orange-500/30 bg-orange-500/5',
              error: 'border-red-500/30 bg-red-500/5',
            };
            const iconColors = {
              success: 'text-green-600',
              warning: 'text-orange-600',
              error: 'text-red-600',
            };
            return (
              <div key={i} className={`rounded-xl border p-5 space-y-2 ${colors[item.type]}`}>
                <item.icon size={22} className={iconColors[item.type]} />
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Figma Definitions */}
      <div className="rounded-xl border border-border p-6 space-y-4 bg-primary/5">
        <h2 className="text-2xl font-bold text-foreground">{isPt ? 'Definições para Figma' : 'Figma Definitions'}</h2>
        <p className="text-sm text-muted-foreground">
          {isPt
            ? 'Ao prototipar microinterações no Figma, utilize Smart Animate entre frames com variantes. Defina easing curves consistentes e documente os parâmetros de cada transição.'
            : 'When prototyping microinteractions in Figma, use Smart Animate between frames with variants. Define consistent easing curves and document each transition\'s parameters.'}
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">{isPt ? 'Configurações recomendadas' : 'Recommended settings'}</h4>
            <div className="space-y-1 text-muted-foreground text-xs">
              <p>• <strong>Easing:</strong> Ease Out (interações), Ease In-Out (transições)</p>
              <p>• <strong>Duration:</strong> 200ms (micro), 300ms (standard), 500ms (emphasis)</p>
              <p>• <strong>Smart Animate:</strong> {isPt ? 'Entre variantes de componentes' : 'Between component variants'}</p>
              <p>• <strong>After delay:</strong> {isPt ? 'Para sequências automáticas' : 'For automatic sequences'}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">{isPt ? 'Tokens de Motion' : 'Motion Tokens'}</h4>
            <div className="space-y-1 font-mono text-xs text-muted-foreground">
              <p>--motion-duration-fast: 150ms</p>
              <p>--motion-duration-normal: 300ms</p>
              <p>--motion-duration-slow: 500ms</p>
              <p>--motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1)</p>
              <p>--motion-easing-decelerate: cubic-bezier(0, 0, 0.2, 1)</p>
              <p>--motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          {isPt ? 'Galeria de Microinterações' : 'Microinteractions Gallery'}
        </h2>
        <div className="space-y-8">
          {examples.map((ex, i) => (
            <div key={i} className="rounded-xl border border-border overflow-hidden">
              <div className="p-6 space-y-1">
                <h3 className="text-lg font-semibold text-foreground">{ex.title}</h3>
                <p className="text-sm text-muted-foreground">{ex.desc}</p>
              </div>
              <div className="px-6 pb-4 flex items-center justify-center min-h-[80px] bg-muted/20">
                {ex.component}
              </div>
              <div className="px-6 pb-6">
                <CodeAccordion code={ex.code} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Device Frames Tab */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          {isPt ? 'Interações por Dispositivo' : 'Interactions by Device'}
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          {isPt
            ? 'Cada dispositivo exige abordagens diferentes para motion e microinterações. Explore exemplos reais com interações funcionais em cada formato.'
            : 'Each device requires different approaches for motion and microinteractions. Explore real examples with functional interactions per form factor.'}
        </p>

        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="bg-muted mb-6">
            <TabsTrigger value="mobile" className="flex items-center gap-2 text-sm">
              <Smartphone size={16} /> Mobile
            </TabsTrigger>
            <TabsTrigger value="tablet" className="flex items-center gap-2 text-sm">
              <Tablet size={16} /> Tablet
            </TabsTrigger>
            <TabsTrigger value="desktop" className="flex items-center gap-2 text-sm">
              <Monitor size={16} /> Desktop
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mobile">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center">
                <DeviceFrame type="mobile">
                  <MobileInteractiveScreen />
                </DeviceFrame>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {isPt ? 'Boas Práticas Mobile' : 'Mobile Best Practices'}
                </h3>
                <div className="space-y-3">
                  {[
                    { title: isPt ? 'Touch Feedback' : 'Touch Feedback', desc: isPt ? 'Use scale(0.95) no tap para feedback tátil imediato. O usuário precisa sentir que tocou.' : 'Use scale(0.95) on tap for immediate tactile feedback.' },
                    { title: isPt ? 'Navegação por gestos' : 'Gesture Navigation', desc: isPt ? 'Swipe para deletar, pull-to-refresh. Animações devem seguir o dedo do usuário (gesture-driven).' : 'Swipe to delete, pull-to-refresh. Animations should follow the user\'s finger.' },
                    { title: isPt ? 'Transições de tela' : 'Screen Transitions', desc: isPt ? 'Use shared element transitions e slide para manter continuidade espacial entre telas.' : 'Use shared element transitions and slide to maintain spatial continuity.' },
                    { title: isPt ? 'Bottom Sheet' : 'Bottom Sheet', desc: isPt ? 'Preferível a modais em mobile. Use spring animation para sensação natural de "snap".' : 'Preferred over modals on mobile. Use spring animation for natural snap feel.' },
                  ].map((tip, i) => (
                    <div key={i} className="rounded-lg border border-border p-3">
                      <h4 className="text-sm font-medium text-foreground mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tablet">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="flex justify-center">
                <DeviceFrame type="tablet">
                  <TabletInteractiveScreen />
                </DeviceFrame>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {isPt ? 'Boas Práticas Tablet' : 'Tablet Best Practices'}
                </h3>
                <div className="space-y-3">
                  {[
                    { title: isPt ? 'Master-Detail Motion' : 'Master-Detail Motion', desc: isPt ? 'Animate a transição entre lista e detalhe lado a lado. Use layout animations para resize fluido.' : 'Animate the transition between list and detail side by side. Use layout animations.' },
                    { title: isPt ? 'Hover + Touch' : 'Hover + Touch', desc: isPt ? 'Tablet suporta ambos. Implemente hover states e touch feedback em todos os elementos interativos.' : 'Tablet supports both. Implement hover states and touch feedback on all interactive elements.' },
                    { title: isPt ? 'Sidebar Animations' : 'Sidebar Animations', desc: isPt ? 'Use spring transitions para expandir/colapsar sidebars. Garanta que o conteúdo reflua suavemente.' : 'Use spring transitions for sidebar expand/collapse. Ensure smooth content reflow.' },
                    { title: isPt ? 'Orientação' : 'Orientation', desc: isPt ? 'Adapte layout com animações ao rotacionar. Cross-fade entre layouts portrait e landscape.' : 'Adapt layout with animations on rotation. Cross-fade between portrait and landscape layouts.' },
                  ].map((tip, i) => (
                    <div key={i} className="rounded-lg border border-border p-3">
                      <h4 className="text-sm font-medium text-foreground mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="desktop">
            <div className="space-y-8">
              <div className="flex justify-center">
                <DeviceFrame type="desktop">
                  <DesktopInteractiveScreen />
                </DeviceFrame>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {isPt ? 'Boas Práticas Desktop' : 'Desktop Best Practices'}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { title: isPt ? 'Hover States Ricos' : 'Rich Hover States', desc: isPt ? 'Desktop é hover-first. Cards com elevação, botões com glow, tooltips com fade-in são essenciais.' : 'Desktop is hover-first. Cards with elevation, buttons with glow, tooltips with fade-in are essential.' },
                    { title: isPt ? 'Staggered Animations' : 'Staggered Animations', desc: isPt ? 'Em grids e listas, use stagger (delay incremental) para entrada sequencial de elementos.' : 'In grids and lists, use stagger for sequential element entrance.' },
                    { title: isPt ? 'Toast & Feedback' : 'Toast & Feedback', desc: isPt ? 'Confirme ações com toasts animados. Use slide-in + fade com auto-dismiss.' : 'Confirm actions with animated toasts. Use slide-in + fade with auto-dismiss.' },
                    { title: isPt ? 'Keyboard Shortcuts' : 'Keyboard Shortcuts', desc: isPt ? 'Anime feedback de atalhos de teclado. Uma sutil flash no elemento ativado confirma a ação.' : 'Animate keyboard shortcut feedback. A subtle flash on the activated element confirms the action.' },
                  ].map((tip, i) => (
                    <div key={i} className="rounded-lg border border-border p-3">
                      <h4 className="text-sm font-medium text-foreground mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground">{tip.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Reference Articles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          {isPt ? 'Artigos de Referência' : 'Reference Articles'}
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {references.map((ref, i) => (
            <a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
            >
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary flex-shrink-0" />
              <span className="text-sm text-foreground group-hover:text-primary">{ref.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Dos and Don'ts */}
      <div className="rounded-xl p-6 space-y-4 bg-primary/5 border border-primary/10">
        <h2 className="text-2xl font-bold text-foreground">
          {isPt ? 'Diretrizes Finais' : 'Final Guidelines'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4 space-y-2">
            <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">✓ {isPt ? 'Faça' : 'Do'}</h4>
            <ul className="text-xs text-muted-foreground space-y-1.5">
              <li>• {isPt ? 'Use animações com propósito claro (guiar, confirmar, informar)' : 'Use animations with clear purpose (guide, confirm, inform)'}</li>
              <li>• {isPt ? 'Mantenha durações entre 200-500ms' : 'Keep durations between 200-500ms'}</li>
              <li>• {isPt ? 'Teste em dispositivos reais' : 'Test on real devices'}</li>
              <li>• {isPt ? 'Respeite prefers-reduced-motion' : 'Respect prefers-reduced-motion'}</li>
              <li>• {isPt ? 'Use will-change e transform para performance' : 'Use will-change and transform for performance'}</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4 space-y-2">
            <h4 className="text-sm font-semibold text-red-700 dark:text-red-400">✗ {isPt ? 'Evite' : "Don't"}</h4>
            <ul className="text-xs text-muted-foreground space-y-1.5">
              <li>• {isPt ? 'Animações que bloqueiam a interação do usuário' : 'Animations that block user interaction'}</li>
              <li>• {isPt ? 'Durações acima de 1 segundo sem necessidade' : 'Durations above 1 second without need'}</li>
              <li>• {isPt ? 'Animar propriedades que causam layout thrashing (width, height, top)' : 'Animate properties causing layout thrashing (width, height, top)'}</li>
              <li>• {isPt ? 'Excesso de animações simultâneas' : 'Excessive simultaneous animations'}</li>
              <li>• {isPt ? 'Animações puramente decorativas sem função' : 'Purely decorative animations without function'}</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default Microinteractions;
