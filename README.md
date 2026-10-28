# Weather Nature remote controls

This repository belongs only to `app.weather.metaapps.forecast26`, the Weather Nature Galaxy Store app. It is an independent initial configuration, not a migration of another app's users, purchases or ad identity.

- Repository: `https://github.com/metosapps/weather-nature-forecast26-config`
- App endpoint: `https://raw.githubusercontent.com/metosapps/weather-nature-forecast26-config/main/config.json`
- Public pages: `https://metosapps.github.io/weather-nature-forecast26-config/`
- Current revision: `2026-10-28.forecast26.2`, config version `2`
- Initial revision (historical): `2026-10-26.forecast26.1`, config version `1`
- This repository contains public config and static pages. Their publication does not establish app-store availability or production monetization readiness.
- App-specific support email, confirmed by the owner: `contact@agafaycamels.com`.

## Initial state

All advertising is disabled, including test advertising: global, production, kill switch, all four format switches, all fifteen placement switches and banner collapsible flags are false. The AdMob App ID and every unit ID are empty. No other app's AdMob identity is retained. A compiled sample App ID is a build placeholder, not this app's production AdMob identity.

Samsung IAP is disabled at both `iap.enabled` and `kill_switches.iap_enabled`. The product list is empty. No seller Content ID, product ID, price or purchase from another app belongs to this package. See `SamsungIAP-SETUP.md` for the configuration contract.

Maintenance and update prompts are disabled. The initial minimum/latest app version code is 1 for both existing store-schema entries. The app's active store is Galaxy Store. Google Play metadata is retained for schema compatibility; it does not claim a Play listing or release.

## Editing and validation

Run `python3 validate.py config.json` before committing. Increment `config_version` for every accepted change and update `revision`; never lower the version to roll back. To undo a change, publish the desired values under a higher version.

The existing app implementation fetches at launch and while foregrounded. Refresh is 300 seconds and the last-known-good cache expires after 72 hours. Malformed responses, a wrong package/store, network failure or older config version do not replace a valid fresh snapshot. After cache expiry the app uses its safe bundled fallback. Offline devices cannot receive changes until they connect. A GitHub commit does not prove immediate in-app acceptance.

Keep bundled defaults and the initial public config consistent. This repository contains data and static pages only; it cannot change native code, manifest values, permissions or SDKs, install APKs, or create store products.

## Advertising contract

| Control | Meaning |
| --- | --- |
| `kill_switches.ads_enabled` / `ads.enabled` | Both must permit advertising |
| `ads.production_enabled` | Separate production opt-in; initially false |
| `ads.app_id` | Must match the exact production manifest App ID |
| `ads.formats.FORMAT.enabled` | Banner, native, interstitial or app-open switch |
| `ads.placements.NAME.enabled` / `unit_id` | Package-specific placement switch and unit |
| `every_n_actions` | Eligible opportunities between attempts |
| `min_interval_seconds` | Minimum time between actual shows/impressions |
| `max_per_session` / `max_per_day` | Per-process session and persistent UTC-day caps |
| `first_session_delay_seconds` | Minimum time from process start |
| `global_cooldown_seconds` / `max_fullscreen_per_session` | Shared full-screen bounds |
| banner `collapsible` | Request an expanded banner only where compiled support exists |

The fifteen existing placement keys and their pacing values are retained. Banner/native minimum intervals are 60 seconds. Navigation interstitial remains every third eligible action, at least 90 seconds apart, up to 3 per session and 10 per day; splash remains 1 per session and 2 per day. App-open keeps a 180-second interval and 30-second initial delay, while disabled. The shared full-screen interval is 90 seconds and cap is 5.

Remote values cannot bypass consent, paid status, billing UI, foreground/visibility, active full-screen or maintenance/update gates. QA uses official sample units only when all relevant switches permit a request. Production requires this package's verified App ID and units, a matching release manifest, and explicit owner authorization after this exact app is live.

Banner SDK automatic refresh is separate from manual request pacing. The client rejects a subsequent loaded banner on the same slot; this does not prevent that preceding SDK refresh network request. Configure any production unit's refresh policy deliberately before activation.

## Public pages

The responsive landing page uses Weather Nature branding, the approved 512×512 icon, six featured screenshots and a real app metrics screen. It links to the package-specific Galaxy Store destination, Privacy Policy, Terms of Use, Help and Support. The confirmed support contact is `contact@agafaycamels.com`. A website deployment does not establish Galaxy Store publication or availability.

- Landing: `https://metosapps.github.io/weather-nature-forecast26-config/`
- Privacy: `https://metosapps.github.io/weather-nature-forecast26-config/privacy.html`
- Terms: `https://metosapps.github.io/weather-nature-forecast26-config/terms.html`
- Support: `https://metosapps.github.io/weather-nature-forecast26-config/support.html`
- Help: `https://metosapps.github.io/weather-nature-forecast26-config/help.html`
- Store destination: `https://galaxystore.samsung.com/detail/app.weather.metaapps.forecast26`

The official Galaxy Store badge is preserved without modification from Samsung's English PNG: `https://img.samsungapps.com/seller/images/badges/galaxyStore/png_big/GalaxyStore_English.png` (652×177; SHA-256 `d4567c3150ad0f87a0e34bc16c19b82e5976850de2a148669a873aae457bd6f3`). See Samsung's [badge guidance](https://developer.samsung.com/galaxy-store/gsb-promotion/manage-your-gsb.html). The six featured PNGs are the approved Weather Nature originals; CSS scales their display without altering them.

Preview locally with `python3 -m http.server 8768 --bind 127.0.0.1`, then visit `http://127.0.0.1:8768`. No build or dependencies are required. `site.js` handles only gallery arrow navigation; native horizontal scrolling works without JavaScript. Pages contain no analytics scripts, third-party JavaScript, contact form or payment checkout. Support buttons open the visitor's email app and do not send a message automatically.

The existing app Website menu already uses the landing URL. The initial October 28 landing-page update did not change `config.json`, advertising, IAP or APK behavior. The later contact-email update changes only the support email and the configuration version/revision; all other configuration values are unchanged. Provider disclosures describe existing weather, Firebase, advertising, GitHub and Samsung integrations; disabled advertising does not claim that every bundled third-party SDK is uninitialized.
