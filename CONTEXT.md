# Context — GitNexus

> Auto-generated 2026-06-06 via grill-with-docs. Source: `D:\repos\gitnexus\`

## Domain Glossary

| Term | Definition |
|---|---|
| **GitNexus** | Cross-repo code knowledge graph — indexes codebases into Neo4j |
| **knowledge graph** | Neo4j-backed graph of files, functions, classes, processes, communities |
| **MCP server** | Model Context Protocol server exposing 13 tools to AI agents |
| **community** | Auto-detected functional area via Leiden clustering algorithm |
| **process** | Execution flow trace from entry point to terminal node |
| **Cypher** | Neo4j query language for graph traversal |
| **Contract Registry** | Cross-repo API contract matching via groups |
| **impact analysis** | Blast radius — what would break if symbol X changes |
| **route map** | API route→handler→consumer mapping |
| **shape check** | Response shape mismatch detection between routes and consumers |

## Entry Points

| Entry | Path | Purpose |
|---|---|---|
| MCP server | `npx.cmd gitnexus mcp` (from `D:\renaissance`) | 13 MCP tools |
| Web UI | Local web interface | Chat-based code exploration |
| CLI | `gitnexus` binary | Index, query, analyze from terminal |
| CW skill | `C:\Users\HP\.codewhale\skills\gitnexus\SKILL.md` | CW-native skill wrapper |
| CW MCP config | `C:\Users\HP\.codewhale\mcp.json` | Registered as "gitnexus" server |
| Enterprise | akonlabs.com | SaaS and self-hosted versions |

## Tool Surface

| # | MCP Tool | CodeWhale Name | Category |
|---|---|---|---|
| 1 | list_repos | mcp_gitnexus_list_repos | Repository Management |
| 2 | group_list | mcp_gitnexus_group_list | Repository Management |
| 3 | group_sync | mcp_gitnexus_group_sync | Repository Management |
| 4 | query | mcp_gitnexus_query | Code Search |
| 5 | context | mcp_gitnexus_context | Code Search |
| 6 | impact | mcp_gitnexus_impact | Change Impact |
| 7 | detect_changes | mcp_gitnexus_detect_changes | Change Impact |
| 8 | api_impact | mcp_gitnexus_api_impact | API & Routes |
| 9 | route_map | mcp_gitnexus_route_map | API & Routes |
| 10 | shape_check | mcp_gitnexus_shape_check | API & Routes |
| 11 | cypher | mcp_gitnexus_cypher | Graph Analysis |
| 12 | rename | mcp_gitnexus_rename | Symbol Rename |
| 13 | tool_map | mcp_gitnexus_tool_map | Tool Mapping |

## Indexed Repos (11 current)

| Repo | Files | Nodes | Edges | Communities |
|---|---|---|---|---|
| gstack | 760 | 18,246 | 25,452 | 652 |
| gstack-opencode | 24 | 127 | 118 | 0 |
| OB1 | 623 | 8,673 | 12,241 | 233 |
| sandcastle | 166 | 3,101 | 4,827 | 111 |
| fallow | 912 | 27,322 | 60,532 | 1,096 |
| open-pencil | 2,069 | 24,747 | 44,171 | 851 |
| GitNexus | 1,228 | 30,223 | 47,218 | 1,062 |
| beads | 2,089 | 51,808 | 127,057 | 982 |
| skills-ref | 63 | 467 | 534 | 0 |
| ruflo-main | — | — | — | — |
| sokuten | 16 | 245 | 460 | 5 |

## Dependencies

- **Requires:** Node.js, npx, Neo4j (embedded)
- **CW config:** `~/.codewhale/mcp.json` with `npx.cmd gitnexus mcp` from `D:\renaissance`
- **Indexing:** `gitnexus index D:\repos\` — indexes all repos
- **Supplies to:** CodeWhale, Cursor, Claude Code, Antigravity, Codex
- **License:** PolyForm Noncommercial

## CW Integration

- ✅ MCP server registered and operational — 11 repos indexed
- ✅ CW gitnexus skill built with 6 workflow categories
- ✅ track.py writes SERs to dataset/execution-log.csv
- ✅ `mcp_gitnexus_list_repos` returns live data
- ✅ All 13 tools accessible via `mcp_gitnexus_*` prefix
- ✅ 4 mandatory sections (How It Works, Error Recovery, Timing, Safety)
- ❌ No group sync tested (requires confirmation)
- ❌ No rename operation tested (structural changes)
