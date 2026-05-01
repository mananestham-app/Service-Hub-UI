// Typography System for Service Hub
// Consistent font definitions across all packages

export const typography = {
  // Font Families
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ],
    heading: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ],
    mono: [
      'JetBrains Mono',
      'Fira Code',
      'Consolas',
      'Monaco',
      'Menlo',
      'monospace'
    ]
  },

  // Font Sizes
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }],
    '8xl': ['6rem', { lineHeight: '1' }],
    '9xl': ['8rem', { lineHeight: '1' }]
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  }
}

// Text Styles
export const textStyles = {
  // Heading Styles
  h1: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.black,
    fontFamily: typography.fontFamily.heading.join(', '),
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight
  },
  h2: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.heading.join(', '),
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight
  },
  h3: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.heading.join(', '),
    lineHeight: typography.lineHeight.snug
  },
  h4: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.heading.join(', '),
    lineHeight: typography.lineHeight.snug
  },
  h5: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.heading.join(', '),
    lineHeight: typography.lineHeight.normal
  },
  h6: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.heading.join(', '),
    lineHeight: typography.lineHeight.normal
  },

  // Body Text Styles
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.sans.join(', '),
    lineHeight: typography.lineHeight.normal
  },
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.sans.join(', '),
    lineHeight: typography.lineHeight.relaxed
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    fontFamily: typography.fontFamily.sans.join(', '),
    lineHeight: typography.lineHeight.normal
  },

  // Button Text Styles
  buttonText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.sans.join(', '),
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.wide
  },
  buttonTextSmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.sans.join(', '),
    lineHeight: typography.lineHeight.none,
    letterSpacing: typography.letterSpacing.wide
  },

  // Caption/Label Styles
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.sans.join(', '),
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.wide
  },

  // Code Styles
  code: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fontFamily.mono.join(', '),
    lineHeight: typography.lineHeight.normal
  }
}

// CSS Classes for Tailwind
export const typographyClasses = {
  // Font Family Classes
  'font-heading': 'font-heading',
  'font-body': 'font-sans',
  'font-mono': 'font-mono',

  // Text Size Classes
  'text-h1': 'text-4xl md:text-5xl lg:text-6xl',
  'text-h2': 'text-3xl md:text-4xl',
  'text-h3': 'text-2xl md:text-3xl',
  'text-h4': 'text-xl md:text-2xl',
  'text-h5': 'text-lg md:text-xl',
  'text-h6': 'text-base md:text-lg',

  // Weight Classes
  'font-light': 'font-light',
  'font-normal': 'font-normal',
  'font-medium': 'font-medium',
  'font-semibold': 'font-semibold',
  'font-bold': 'font-bold',
  'font-black': 'font-black',

  // Leading Classes
  'leading-tight': 'leading-tight',
  'leading-snug': 'leading-snug',
  'leading-normal': 'leading-normal',
  'leading-relaxed': 'leading-relaxed',

  // Tracking Classes
  'tracking-tight': 'tracking-tight',
  'tracking-normal': 'tracking-normal',
  'tracking-wide': 'tracking-wide'
}
