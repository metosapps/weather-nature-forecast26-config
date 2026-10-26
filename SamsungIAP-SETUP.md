# Samsung IAP setup for Weather Nature

Package: `app.weather.metaapps.forecast26`

Status: no product IDs or Seller Portal Content ID are assigned in this repository. New purchases and the IAP kill switch are off, and `iap.products` is empty. The confirmed app support address is `apps@agafayhotels.com`. No checkout or Restore validation has been performed for this new package.

The compiled integration supports ad removal using subscriptions and one-time items. If the owner chooses weekly, monthly and yearly plans, create distinct products for this app in Galaxy Seller Portal. Use the exact resulting IDs; do not copy another package's catalog or invent available offers. A one-time item uses the existing `lifetime` config type and is acknowledged without being consumed. Subscription entries use `subscription`; their actual period, title, localized price and terms come from Samsung's catalog.

Each future product entry has only `id` (string), `type` (`subscription` or `lifetime`) and `enabled` (boolean). At most eight entries are accepted. Leave the catalog empty until actual package-specific products exist. Adding real IDs later does not require a new build if the compiled integration and configuration schema remain compatible.

Keep retired IDs configured with `enabled: false` so eligible earlier purchases remain recognizable for Restore. Disabling new purchases must not erase verified ownership. Purchases and entitlements are isolated by this package and by TEST versus PRODUCTION mode; the remote JSON cannot switch modes.

Before enabling purchases, verify this exact Galaxy Store-installed app with the approved Samsung testing setup: store catalog and period/price display, canceled checkout, successful purchase, receipt verification, acknowledgement, restart, same-account Restore, subscription expiry/cancellation and ad removal. Store product registration or Active status alone does not establish working purchases. A release uses PRODUCTION mode; do not assume a production checkout is free.

The existing client retains verified local purchase status when a network or Samsung check fails. It is not a backend entitlement service and does not claim server refund webhooks or cross-app account synchronization.

Official integration reference: https://developer.samsung.com/iap/programming-guide/integrate-iap-helper-into-your-app.html
