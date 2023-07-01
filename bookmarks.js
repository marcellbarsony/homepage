const bookmarks = [

  {
    title: "Arch",
    links: [
      { name: "Arch Linux", url: "https://archlinux.org" },
      { name: "AUR", url: "https://aur.archlinux.org" },
      { name: "Reddit", url: "https://reddit.com/r/archlinux" },
      { name: "Wiki", url: "https://wiki.archlinux.org" },
    ],
  },
  {
    title: "Banking",
    links: [
      { name: "OTP SZEP", url: "https://magan.szepkartya.otpportalok.hu" },
      { name: "Revolut", url: "https://revolut.com" },
      { name: "UniCredit", url: "https://hu.unicreditbanking.eu" },
    ],
  },
  {
    title: "Cyber [CTF]",
    links: [
      { name: "bWAPP", url: "https://itsecgames.com" },
      { name: "CTFtime", url: "https://ctftime.org" },
      { name: "CyberDefenders", url: "https://cyberdefenders.org" },
      { name: "Hack The Box", url: "https://hackthebox.com" },
      { name: "Hack This Site", url: "https://hackthissite.org" },
      { name: "Portswigger", url: "https://portswigger.net" },
      { name: "TryHackMe", url: "https://tryhackme.com" },
      { name: "Vulnhub", url: "https://vulnhub.com" },
    ],
  },
  {
    title: "Cyber [Tools]",
    links: [
      { name: "CVE", url: "https://cve.mitre.org" },
      { name: "CVE [beta]", url: "https://cve.org" },
      { name: "Exploit DB", url: "https://exploit-db.com" },
      { name: "Revshells", url: "https://revshells.com" },
      { name: "VirusTotal", url: "https://virustotal.com" },
    ],
  },
  {
    title: "Cyber [Network]",
    links: [
      { name: "DownDetector", url: "https://downdetector.com" },
      { name: "IsitDownRightNow", url: "https://isitdownrightnow.com" },
      { name: "Subnet Calculator", url: "https://solarwinds.com/free-tools/advanced-subnet-calculator" },
    ],
  },
  {
    title: "Cyber [News]",
    links: [
      { name: "BleepingComputer", url: "https://bleepingcomputer.com" },
      { name: "HackerNoon", url: "https://hackernoon.com" },
      { name: "The Daily Swig", url: "https://portswigger.net/daily-swig" },
      { name: "The Hacker News", url: "https://thehackernews.com" },
      { name: "Threatpost", url: "https://threatpost.com" },
    ],
  },
  {
    title: "Docs",
    links: [
      { name: "Gentoo Wiki", url: "https://wiki.gentoo.org" },
      { name: "Linux Documentation", url: "https://linux.die.net" },
      { name: "Wikipedia", url: "https://wikipedia.org" },
    ],
  },
  {
    title: "Google",
    links: [
      { name: "Accounts", url: "https://accounts.google.com" },
      { name: "Drive", url: "https://drive.google.com" },
      { name: "Flights", url: "https://flights.google.com" },
      { name: "Gmail", url: "https://mail.google.com" },
      { name: "Images", url: "https://images.google.com" },
      { name: "Maps", url: "https://maps.google.com" },
      { name: "MyMaps", url: "https://mymaps.google.com" },
      { name: "Photos", url: "https://photos.google.com" },
    ],
  },
  {
    title: "Gov",
    links: [
      { name: "Konzuli szolgalat", url: "https://konzuliszolgalat.kormany.hu" },
      { name: "NAV", url: "https://nav.gov.hu" },
      { name: "Ugyfelkapu", url: "https://ugyfelkapu.gov.hu" },
      { name: "Ujbuda", url: "https://ujbuda.hu" },
    ],
  },
  {
    title: "Linux",
    links: [
      { name: "Crontab guru", url: "https://crontab.guru" },
      { name: "Distrowatch", url: "https://distrowatch.com" },
      { name: "Kernel", url: "https://kernel.org" },
      { name: "Linux Journey", url: "https://linuxjourney.com" },
      { name: "Reddit", url: "https://reddit.com/r/linux" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Spotify", url: "https://open.spotify.com" },
      { name: "Spotify for pets", url: "https://pets.byspotify.com" },
      { name: "Youtube", url: "https://youtube.com" },
    ],
  },
  {
    title: "Meta",
    links: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Messenger", url: "https://messenger.com" },
      { name: "Messages", url: "https://facebook.com/messages" },
    ],
  },
  {
    title: "Microsoft",
    links: [
      { name: "Accounts", url: "https://account.microsoft.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "OneDrive", url: "https://live.onedrive.com" },
    ],
  },
  {
    title: "Mozilla",
    links: [
      { name: "Firefox Accounts", url: "https://accounts.firefox.com" },
    ],
  },
  {
    title: "News",
    links: [
      { name: "/r/worldnews", url: "https://reddit.com/r/worldnews" },
      { name: "Telex", url: "https://telex.hu" },
      { name: "Qubit", url: "https://qubit.hu" },
    ],
  },
  {
    title: "Proton",
    links: [
      { name: "Calendar", url: "https://proton.me/calendar" },
      { name: "Drive", url: "https://proton.me/drive" },
      { name: "Mail", url: "https://proton.me/mail" },
      { name: "VPN", url: "https://protonvpn.com" },
    ],
  },
  {
    title: "Python",
    links: [
      { name: "Arch Wiki", url: "https://wiki.archlinux.org/title/Python" },
      { name: "Documentation", url: "https://docs.python.org/3" },
      { name: "PyPI", url: "https://pypi.org" },
      { name: "Python", url: "https://python.org" },
    ],
  },
  {
    title: "Reddit",
    links: [
      { name: "Front page", url: "https://reddit.com/" },
      { name: "/r/hungary", url: "https://reddit.com/r/hungary" },
      { name: "/r/neovim", url: "https://reddit.com/r/neovim" },
      { name: "/r/unixporn", url: "https://reddit.com/r/unixporn" },
    ],
  },
  {
    title: "Rust",
    links: [
      { name: "Rust", url: "https://rust-lang.org" },
      { name: "Crates", url: "https://crates.io" },
      { name: "Docs [Examples]", url: "https://doc.rust-lang.org/stable/rust-by-example" },
      { name: "Docs [Std library]", url: "https://doc.rust-lang.org/stable/std" },
      { name: "Docs [The Book]", url: "https://doc.rust-lang.org/book" },
      { name: "Foundation", url: "https://foundation.rust-lang.org" },
      { name: "Learn Rust", url: "https://rust-lang.org/learn" },
      { name: "Reddit", url: "https://reddit.com/r/rust" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Discord", url: "https://discordapp.com" },
      { name: "Mastodon", url: "https://mastodon.com" },
      { name: "Nitter", url: "https://nitter.com" },
      { name: "Twitter", url: "https://twitter.com" },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "Bitwarden", url: "https://vault.bitwarden.com" },
      { name: "Calculator", url: "https://geogebra.org/scientific" },
      { name: "OpenStreetMap", url: "https://openstreetmap.org" },
      { name: "Translate [DeepL]", url: "https://deepl.com/translator" },
    ],
  },
  {
    title: "Tools [Privacy]",
    links: [
      { name: "AlternativeTo Tools", url: "https://alternativeto.net" },
      { name: "Privacy Tools", url: "https://privacytools.io" },
    ],
  },
  {
    title: "Tools [Online Privacy]",
    links: [
      { name: "Browserleaks", url: "https://browserleaks.com" },
      { name: "Device Info", url: "https://deviceinfo.me" },
      { name: "IP Leaks Info", url: "https://ipleak.net" },
      { name: "SSL Labs", url: "https://ssllabs.com" },
    ],
  },
  {
    title: "Qtile",
    links: [
      { name: "Documentation", url: "https://qtile.readthedocs.io/en/stable" },
      { name: "GitHub", url: "https://github.com/qtile/qtile" },
      { name: "Reddit", url: "https://reddit.com/r/qtile" },
    ],
  },
];
