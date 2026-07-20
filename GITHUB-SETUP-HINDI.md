# GitHub पर Sirmint Blog लगाने के आसान चरण

## 1. नया repository बनाएं

GitHub में **New repository** खोलें और यह जानकारी भरें:

- **Owner:** `Sirmint-Technology`
- **Repository name:** `sirmint-blog`
- **Description:** `Official Sirmint Technology journal built with Astro and Markdown, deployed on GitHub Pages.`
- **Visibility:** Public

README, `.gitignore` या license अलग से initialize न करें।

## 2. ZIP upload करें

1. इस ZIP को अपने computer में extract करें।
2. GitHub repository में **uploading an existing file** चुनें।
3. Extract किए हुए folder के अंदर की सभी files और folders upload करें।
4. Commit message लिखें: `Launch Sirmint Journal`
5. **Commit changes** दबाएं।

> ZIP folder स्वयं upload न करें। ZIP के अंदर की `.github`, `public`, `src`, `package.json` और बाकी files repository root में होनी चाहिए।

## 3. GitHub Pages चालू करें

Repository में:

1. **Settings** खोलें।
2. बाईं तरफ **Pages** चुनें।
3. **Build and deployment → Source** में `GitHub Actions` चुनें।
4. **Actions** tab में `Deploy to GitHub Pages` workflow पूरा होने दें।

## 4. Custom domain जोड़ें

Repository में:

1. **Settings → Pages** खोलें।
2. Custom domain में `blog.sirmint.com` लिखें।
3. Save करें।

## 5. Cloudflare DNS

पुराना Blogger वाला `blog` record हटाकर यह record बनाएं:

- **Type:** CNAME
- **Name:** blog
- **Target:** `Sirmint-Technology.github.io`
- **Proxy status:** DNS only
- **TTL:** Auto

यदि repository `rajivkap` personal account में बनाते हैं, target `rajivkap.github.io` होगा।

## 6. HTTPS

DNS connect होने के बाद GitHub Pages settings में **Enforce HTTPS** enable करें।

## नया article कैसे डालें

1. Repository में `src/content/blog/` खोलें।
2. **Add file → Create new file** चुनें।
3. Filename रखें, जैसे `cloud-deployment-guide.md`।
4. किसी existing article का frontmatter copy करें।
5. Article लिखकर commit करें।

हर commit के बाद GitHub Actions blog को automatically rebuild और publish करेगा।
