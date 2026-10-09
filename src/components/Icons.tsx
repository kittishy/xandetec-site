import type { SVGProps } from 'react';

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  ...props,
});

const solid = (props: SVGProps<SVGSVGElement>) => ({
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
  focusable: false,
  ...props,
});

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...solid(props)}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.29L2 22l4.99-1.63a9.8 9.8 0 0 0 5.05 1.4c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm0 17.94c-1.62 0-3.13-.46-4.42-1.26l-.32-.19-3.13 1.02 1.04-3.05-.2-.32a8.1 8.1 0 0 1-1.25-4.3c0-4.48 3.66-8.13 8.15-8.13 4.48 0 8.13 3.65 8.13 8.13 0 4.49-3.65 8.14-8.13 8.14Zm4.63-5.86c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.66.8-.81.97-.15.17-.3.19-.55.07-.25-.13-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.45.12-.15.17-.26.25-.43.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.3-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.72 2.73 4.18 3.74.58.25 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.15-1.19-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M15.5 21A12.5 12.5 0 0 1 3 8.5V6a2 2 0 0 1 2-2h2.2a1 1 0 0 1 1 .8l.8 3a1 1 0 0 1-.3.95L7.2 10.2a10.5 10.5 0 0 0 6.6 6.6l1.45-1.5a1 1 0 0 1 .95-.27l3 .77a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2h-2.5Z" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base({ width: 15, height: 15, strokeWidth: 2.1, ...props })}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base({ width: 16, height: 16, strokeWidth: 2.4, ...props })}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base({ width: 16, height: 16, strokeWidth: 2.2, ...props })}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
