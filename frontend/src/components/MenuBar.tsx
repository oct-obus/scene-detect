import { useState, useRef, useEffect, useCallback } from 'react';

interface MenuItem {
  label: string;
  action?: () => void;
  checked?: boolean;
  submenu?: MenuItem[];
  separator?: boolean;
}

interface MenuBarProps {
  panels: { id: string; title: string; visible: boolean }[];
  onTogglePanel: (id: string) => void;
  onResetWorkspace: () => void;
}

function MenuDropdown({ items, onClose }: { items: MenuItem[]; onClose: () => void }) {
  return (
    <div className="menu-dropdown">
      {items.map((item, i) => {
        if (item.separator) return <div key={i} className="menu-separator" />;
        if (item.submenu) return <SubMenu key={i} item={item} onClose={onClose} />;
        return (
          <div
            key={i}
            className="menu-item"
            onClick={() => {
              item.action?.();
              onClose();
            }}
          >
            {item.checked !== undefined && (
              <span className="menu-check">{item.checked ? '\u2713' : ''}</span>
            )}
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function SubMenu({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="menu-item has-submenu"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{item.label}</span>
      <span className="submenu-arrow">{'\u25B6'}</span>
      {open && item.submenu && (
        <div className="menu-dropdown submenu">
          {item.submenu.map((sub, i) => (
            <div
              key={i}
              className="menu-item"
              onClick={() => {
                sub.action?.();
                onClose();
              }}
            >
              {sub.checked !== undefined && (
                <span className="menu-check">{sub.checked ? '\u2713' : ''}</span>
              )}
              <span>{sub.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function MenuBar({ panels, onTogglePanel, onResetWorkspace }: MenuBarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    if (!openMenu) return;
    const handler = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openMenu]);

  const windowsItems: MenuItem[] = [
    ...panels.map((p) => ({
      label: p.title,
      checked: p.visible,
      action: () => onTogglePanel(p.id),
    })),
    { separator: true, label: '' },
    {
      label: 'Workspaces',
      submenu: [{ label: 'Reset Workspace', action: onResetWorkspace }],
    },
  ];

  const menus: { label: string; items: MenuItem[] }[] = [
    { label: 'Windows', items: windowsItems },
  ];

  return (
    <div className="menu-bar" ref={barRef}>
      {menus.map((menu) => (
        <div key={menu.label} className="menu-bar-item-wrapper">
          <div
            className={`menu-bar-item ${openMenu === menu.label ? 'active' : ''}`}
            onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
            onMouseEnter={() => openMenu && setOpenMenu(menu.label)}
          >
            {menu.label}
          </div>
          {openMenu === menu.label && <MenuDropdown items={menu.items} onClose={close} />}
        </div>
      ))}
    </div>
  );
}
