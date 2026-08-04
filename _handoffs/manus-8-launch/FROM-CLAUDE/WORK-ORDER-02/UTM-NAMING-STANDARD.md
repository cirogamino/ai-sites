# UTM Naming Standard — Manus (-8)
Work Order 02. Canonical, all-lowercase, no spaces, no personally identifying data in any parameter.

## The Five Parameters

| Parameter | Definition | Rule |
|---|---|---|
| `utm_source` | The platform the traffic came from | One fixed value per platform — see table below |
| `utm_medium` | The general category of traffic | One of: `social`, `email`, `dm`, `paid-social` |
| `utm_campaign` | The specific campaign or launch wave | Format: `offer-slug_launch-wave`, e.g. `prompt-club_wo2-launch` |
| `utm_content` | Differentiates variants within the same campaign (e.g., two ad creatives) | Format: `asset-id`, matching the Asset Number in `CAMPAIGN-ACTIVATION-MATRIX.csv`, lowercased with hyphens, e.g. `s2-p1-x` |
| `utm_term` | Paid search/paid social keyword or targeting term, if applicable | Omit entirely for organic posts; only used for paid placements |

## Source Values by Channel

| Channel | `utm_source` value |
|---|---|
| X | `x` |
| Instagram | `instagram` |
| TikTok | `tiktok` |
| YouTube | `youtube` |
| Pinterest | `pinterest` |
| Beehiiv (email) | `beehiiv` |
| Direct message (any platform) | `dm` |

## Offer Slugs (for `utm_campaign`)

| Product | Slug |
|---|---|
| The Daily AI Prompt Club -8 | `prompt-club` |
| The AI Automation Templates -8 | `automation-templates` |
| The AI Business Mastermind -8 | `business-mastermind` |

## Worked Examples

- X post promoting the Prompt Club, launch wave 1:
  `?utm_source=x&utm_medium=social&utm_campaign=prompt-club_wo2-launch&utm_content=s2-p1-x`
- Beehiiv email promoting the Automation Templates:
  `?utm_source=beehiiv&utm_medium=email&utm_campaign=automation-templates_wo2-launch&utm_content=s2-p2-bee`
- DM script for the Business Mastermind (once the community-language issue is resolved and this is cleared to launch):
  `?utm_source=dm&utm_medium=dm&utm_campaign=business-mastermind_wo2-launch&utm_content=s2-p3-dm`
- Paid Instagram placement for the Prompt Club:
  `?utm_source=instagram&utm_medium=paid-social&utm_campaign=prompt-club_wo2-launch&utm_content=s2-p1-ig&utm_term=daily-ai-prompts`

## Rules

- All values lowercase, hyphens only (no underscores inside a value, no spaces, no camelCase).
- Never include an email address, name, or any other personal identifier in any UTM parameter — this violates the site's own Privacy Policy draft ("never place personal or sensitive data in URL parameters").
- Every link in `CAMPAIGN-ACTIVATION-MATRIX.csv` should carry a UTM string built from this standard before it's scheduled — use the Asset Number column directly as `utm_content`.
- Keep `utm_campaign` stable across a single coordinated push (e.g., all Work Order 02 launch assets share `_wo2-launch`) so results can be compared at the campaign level, not just per-post.

*Mara Quinn is a disclosed virtual AI educator created for the Manus (-8) product line.*
