import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DigitalChecklist = () => {
  const { t } = useLanguage();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const categories = [
    {
      titleKey: 'checklist.accessibility',
      items: ['checklist.a1', 'checklist.a2', 'checklist.a3', 'checklist.a4', 'checklist.a5'],
    },
    {
      titleKey: 'checklist.consistency',
      items: ['checklist.c1', 'checklist.c2', 'checklist.c3', 'checklist.c4'],
    },
    {
      titleKey: 'checklist.responsive',
      items: ['checklist.r1', 'checklist.r2', 'checklist.r3'],
    },
    {
      titleKey: 'checklist.performance',
      items: ['checklist.p1', 'checklist.p2', 'checklist.p3'],
    },
    {
      titleKey: 'checklist.ux',
      items: ['checklist.u1', 'checklist.u2', 'checklist.u3', 'checklist.u4'],
    },
  ];

  const allItems = categories.flatMap(c => c.items);
  const checkedCount = allItems.filter(k => checked[k]).length;

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="border border-border rounded-xl p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">{t('checklist.title')}</h3>
        <span className="text-sm text-muted-foreground">{checkedCount}/{allItems.length}</span>
      </div>
      <p className="text-sm text-muted-foreground">{t('checklist.subtitle')}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div key={cat.titleKey} className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">{t(cat.titleKey)}</h4>
            <div className="space-y-2">
              {cat.items.map((item) => (
                <button
                  key={item}
                  onClick={() => toggle(item)}
                  className="flex items-start gap-2 text-left w-full group"
                >
                  {checked[item] ? (
                    <CheckSquare size={16} className="text-primary mt-0.5 shrink-0" />
                  ) : (
                    <Square size={16} className="text-muted-foreground mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                  )}
                  <span className={`text-sm ${checked[item] ? 'text-primary line-through' : 'text-muted-foreground'}`}>
                    {t(item)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalChecklist;
