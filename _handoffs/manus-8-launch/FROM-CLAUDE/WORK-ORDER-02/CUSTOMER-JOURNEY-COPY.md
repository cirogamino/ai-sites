# Customer Journey Copy — Manus (-8) Launch
Work Order 02. Copy only, for Manus to wire into the actual checkout/delivery flow. All three products are one-time purchases ($9 / $49 / $199) per the Fixed Facts in the work order — not subscriptions. Voice: Mara Quinn, Operator's Field Manual, direct and anti-hype.

---

## 1. Checkout Redirect (leaving the storefront for Stripe)
**Heading:** Taking you to secure checkout
**Body:** You're being redirected to Stripe to complete your purchase. Your payment details are handled entirely by Stripe — we never see or store your card information.
**Primary CTA:** Continue to checkout
**Secondary CTA:** Go back
**Status text (screen reader):** "Redirecting to secure checkout. Please wait."

## 2. Payment Success
**Heading:** You're in.
**Body:** Your purchase is confirmed. Your download link is on its way to your inbox — check for an email from us within the next few minutes.
**Primary CTA:** Go to my download
**Secondary CTA:** Return to homepage
**Status text:** "Payment successful. Confirmation email sending."

## 3. Payment Cancellation
**Heading:** Checkout cancelled
**Body:** No charge was made. If you closed checkout by mistake or changed your mind, you can pick back up whenever you're ready.
**Primary CTA:** Return to offers
**Secondary CTA:** Contact support
**Status text:** "Checkout was cancelled. No payment was processed."

## 4. Payment Failure
**Heading:** That payment didn't go through
**Body:** Your card wasn't charged. This is usually a card issue on the processing side, not something wrong with your order. Try again, or use a different payment method.
**Primary CTA:** Try again
**Secondary CTA:** Contact support
**Status text:** "Payment failed. No charge was made."

## 5. Order Lookup
**Heading:** Find your order
**Body:** Enter the email you used at checkout and we'll look up your purchase and resend your download link if needed.
**Primary CTA:** Look up my order
**Secondary CTA:** Contact support instead
**Status text:** "Order lookup in progress."

## 6. Delivery Preparing
**Heading:** Getting your download ready
**Body:** This usually takes less than a minute. No action needed — your link will arrive by email.
**Primary CTA:** (none — this is a transient/waiting state)
**Secondary CTA:** Contact support if this takes longer than 15 minutes
**Status text:** "Preparing your download. This may take a moment."

## 7. Delivery Ready
**Heading:** Your download is ready
**Body:** [PRODUCT NAME] is ready to download. This link is yours to keep — save it somewhere you'll find it again.
**Primary CTA:** Download now
**Secondary CTA:** Email me the link instead
**Status text:** "Your download is ready."

## 8. Delivery Failure
**Heading:** We couldn't prepare your download
**Body:** Something went wrong on our end — this isn't something you did. Your payment is confirmed and your order is on file. Contact support and we'll get your files to you directly.
**Primary CTA:** Contact support
**Secondary CTA:** Try downloading again
**Status text:** "Delivery error. Your order is confirmed; support has been notified." [MANUS: confirm whether this is actually auto-notified or if that claim needs to be removed until true]

## 9. Duplicate Purchase
**Heading:** Looks like you already own this
**Body:** Our records show you already purchased [PRODUCT NAME] on [PURCHASE DATE]. No new charge was made. Here's your download again in case you need it.
**Primary CTA:** Go to my download
**Secondary CTA:** Contact support if this looks wrong
**Status text:** "Duplicate purchase detected. No new charge was made."

## 10. Support Escalation
**Heading:** Let's get this sorted
**Body:** Tell us what happened and we'll help directly. Include your order email and, if you have it, the approximate purchase date.
**Primary CTA:** Send message
**Secondary CTA:** Back to homepage
**Status text:** "Support request ready to send."

---
*No urgency language, countdowns, or invented promises used anywhere above. "Delivery Failure" auto-notification claim flagged for Manus to confirm before use — do not ship a false operational claim.*
