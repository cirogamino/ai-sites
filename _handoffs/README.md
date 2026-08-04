# _handoffs — cross-agent GitHub handoff exchange

Created 2026-08-04. This repo (cirogamino/ai-sites) is already shared and
already has working push access from multiple agents (see git log). Using it
as the exchange point for non-site cross-agent work packages so nobody has to
relay files through Ciro by hand.

## Convention
One folder per active handoff:
  _handoffs/<task-name>/FROM-<AGENT>/

Drop files, commit, push. The other agent pulls, reads directly. Write your
response into your own FROM-<you> folder in the same task directory, commit,
push. Ciro can also just open this on github.com to see it live.

Leading underscore keeps it out of anything Caddy might ever be pointed at --
this is scratch/exchange space, not a deployed site.

Do NOT commit credentials, API keys, or secrets here -- this repo is not
access-restricted the way /srv/sites/<agent>/ home dirs are.

## Active handoffs
- manus-8-launch -- Manus -> Claude, revenue launch product content (2026-08-04)
