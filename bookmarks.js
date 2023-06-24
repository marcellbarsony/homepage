const bookmarks = [

  {
    title: "Banking",
    links: [
      { name: "OTP [SZEP]", url: "https://magan.szepkartya.otpportalok.hu" },
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
      { name: "Calculator [Subnet]", url: "https://solarwinds.com/free-tools/advanced-subnet-calculator" },
      { name: "DownDetector", url: "https://downdetector.com" },
      { name: "IsitDownRightNow", url: "https://isitdownrightnow.com" },
    ],
  },
  {
    title: "Docs",
    links: [
      { name: "Arch Wiki", url: "https://wiki.archlinux.org" },
      { name: "Gentoo", url: "https://wiki.gentoo.org" },
      { name: "Linux Documentation", url: "https://linux.die.net" },
      { name: "Wikipedia", url: "https://wikipedia.org" },
      { name: "Qtile", url: "https://qtile.readthedocs.io/en/stable" },
    ],
  },
  {
    title: "Google",
    links: [
      { name: "Accounts", url: "https://accounts.google.com" },
      { name: "Drive", url: "https://drive.google.com" },
      { name: "Flights", url: "https://flights.google.com" },
      { name: "Gmail", url: "https://mail.google.com" },
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
      { name: "Arch", url: "https://archlinux.org" },
      { name: "Arch [AUR]", url: "https://aur.archlinux.org" },
      { name: "Crontab guru", url: "https://crontab.guru" },
      { name: "Distrowatch", url: "https://distrowatch.com" },
      { name: "Kernel", url: "https://kernel.org" },
      { name: "Linux Journey", url: "https://linuxjourney.com" },
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
    title: "Media",
    links: [
      { name: "Spotify", url: "https://open.spotify.com" },
      { name: "Spotify for pets", url: "https://pets.byspotify.com" },
      { name: "Youtube", url: "https://youtube.com" },
    ],
  },
  {
    title: "News",
    links: [
      { name: "/r/worldnews", url: "https://reddit.com/r/worldnews" },
      { name: "BleepingComputer", url: "https://bleepingcomputer.com" },
      { name: "HackerNoon", url: "https://hackernoon.com" },
      { name: "The Daily Swig", url: "https://portswigger.net/daily-swig" },
      { name: "Telex", url: "https://telex.hu" },
      { name: "The Hacker News", url: "https://thehackernews.com" },
      { name: "Threatpost", url: "https://threatpost.com" },
      { name: "Qubit", url: "https://qubit.hu" },
    ],
  },
  {
    title: "Proton",
    links: [
      { name: "Mail", url: "https://proton.me/mail" },
      { name: "Calendar", url: "https://proton.me/calendar" },
      { name: "Drive", url: "https://proton.me/drive" },
      { name: "VPN", url: "https://protonvpn.com" },
    ],
  },
  {
    title: "Reddit",
    links: [
      { name: "Front page", url: "https://reddit.com/" },
      { name: "/r/archlinux", url: "https://reddit.com/r/archlinux" },
      { name: "/r/hungary", url: "https://reddit.com/r/hungary" },
      { name: "/r/linux", url: "https://reddit.com/r/linux" },
      { name: "/r/neovim", url: "https://reddit.com/r/neovim" },
      { name: "/r/unixporn", url: "https://reddit.com/r/unixporn" },
      { name: "/r/qtile", url: "https://reddit.com/r/qtile" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Discord", url: "https://discordapp.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
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
      { name: "Privacy Tools", url: "https://privacytools.io" },
      { name: "AlternativeTo Tools", url: "https://atlernativeto.net" },
      { name: "Translate [DeepL]", url: "https://deepl.com/translator" },
    ],
  },
];
