# Code Formatting Guide

This guide shows how to make code samples stand out better in the Nimbus documentation.

## What's Been Improved

### 1. Enhanced Global CSS Styles
All code blocks now have:
- Better borders and shadows for visual separation
- Improved spacing (margin top/bottom)
- Enhanced padding inside code blocks
- Better dark mode support
- Distinct styling for inline code vs code blocks

### 2. CodeBlock Component
A new reusable component for code samples with titles.

## Usage Examples

### Standard Code Block (Automatic Styling)
Just use regular markdown code fences - they'll automatically get enhanced styling:

```markdown
```csharp
var bus = new BusBuilder()
    .Configure()
    .Build();
\```
```

This will render with:
- Border and shadow
- Better padding (p-4)
- Nice background colors (light/dark mode)
- 6-unit vertical spacing

### CodeBlock Component with Title
For code that needs a descriptive title:

```markdown
import CodeBlock from '@components/ui/CodeBlock.astro';

<CodeBlock title="Configure Azure Service Bus Transport">
```csharp
var transport = new AzureServiceBusTransportConfiguration()
    .WithConnectionString(azureConnectionString)
    .WithDefaultTimeout(TimeSpan.FromSeconds(30));
\```
</CodeBlock>
```

This adds:
- A header bar with title
- Code icon
- Language indicator
- Better visual hierarchy

### Inline Code
Inline code like `IBusCommand` automatically gets:
- Pink/rose color highlighting
- Subtle background
- Proper padding

## Where to Use CodeBlock Component

**Use the CodeBlock component when:**
- The code needs context (configuration examples, setup steps)
- You want to emphasize important code
- Multiple related code blocks need clear separation

**Use standard markdown code blocks when:**
- Simple, self-explanatory snippets
- Code within lists or callouts
- Quick examples that don't need titles

## Examples in Documentation

See updated examples in:
- `src/content/docs/transports.mdx` - Lines 87-139 show CodeBlock usage
- Any `.mdx` file will automatically get enhanced styling for standard code blocks

## Spacing Guidelines

The CSS now provides:
- `my-6` (1.5rem top/bottom) for code blocks
- `my-4` for code in lists
- `mt-8` for headings after code (better section separation)
- `mt-4` for code after headings (tighter coupling)

## Dark Mode

All code styling automatically adapts to dark mode:
- Light mode: gray-50 background with gray-200 borders
- Dark mode: gray-900 background with gray-800 borders
- Syntax highlighting themes switch automatically (via Shiki config)

## Migration

To improve existing documentation:

1. Import the CodeBlock component at the top of your `.mdx` file:
   ```
   import CodeBlock from '@components/ui/CodeBlock.astro';
   ```

2. Wrap important code samples:
   ```
   <CodeBlock title="Your descriptive title">
   ```language
   // your code
   \```
   </CodeBlock>
   ```

3. Standard code blocks will automatically get enhanced styling - no changes needed!
