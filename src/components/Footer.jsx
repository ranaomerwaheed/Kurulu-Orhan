import React from 'react'


export default function Footer(){
return (
<footer className="mt-12 bg-slate-50 dark:bg-slate-900 border-t py-6">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img src="/images/atv-logo.png" alt="atv small" className="h-8" />
<p className="text-sm">This website is not affiliated with ATV.</p>
</div>


<div className="flex gap-4">
<a aria-label="facebook" href="#">Facebook</a>
<a aria-label="instagram" href="#">Instagram</a>
<a aria-label="twitter" href="#">Twitter</a>
</div>


<div className="text-sm">© {new Date().getFullYear()} Kuruluş Orhan — All rights reserved</div>
</div>
</footer>
)

}
