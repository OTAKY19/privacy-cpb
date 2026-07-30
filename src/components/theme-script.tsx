"use client";

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem('cpb_theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`,
      }}
    />
  );
}
