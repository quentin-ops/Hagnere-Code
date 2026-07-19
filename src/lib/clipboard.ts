export interface ClipboardAdapter {
  writeText?: (text: string) => Promise<void>;
  fallbackCopy: (text: string) => boolean;
}

export async function copyWithFallback(
  text: string,
  adapter: ClipboardAdapter,
): Promise<boolean> {
  if (adapter.writeText) {
    try {
      await adapter.writeText(text);
      return true;
    } catch {
      // Permission and browser-policy failures can still use the DOM fallback.
    }
  }

  try {
    return adapter.fallbackCopy(text);
  } catch {
    return false;
  }
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  return copyWithFallback(text, {
    writeText: navigator.clipboard?.writeText
      ? navigator.clipboard.writeText.bind(navigator.clipboard)
      : undefined,
    fallbackCopy(value) {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        return document.execCommand("copy");
      } finally {
        textarea.remove();
      }
    },
  });
}
