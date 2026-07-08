import { ToolSlide, type ToolData } from '../components/ToolSlide'

const specKit: ToolData = {
  name: 'GitHub Spec-Kit',
  tagline: 'Spec-Driven Development cho agent',
  layer: 'Prompt → Context (+ Orchestration nhẹ)',
  what: 'Biến yêu cầu ngôn ngữ tự nhiên thành các artifact Markdown có cấu trúc, làm context cho agent thay vì chat tuỳ hứng.',
  points: [
    'Pipeline 4 pha: Specify → Plan → Tasks → Implement, mỗi pha ra một artifact.',
    'Ranh giới yêu cầu, trade-off, task breakdown thành tài liệu review được.',
    'Tích hợp 30+ agent: Claude Code, Copilot, Cursor, Gemini CLI…',
  ],
  snippet: {
    title: 'spec-kit workflow',
    lines: [
      { t: 'specify init my-app' },
      { c: '# 1. mô tả cái gì & vì sao' },
      { t: '/speckit.specify' },
      { c: '# 2. tech stack + kiến trúc' },
      { t: '/speckit.plan' },
      { c: '# 3. chia task nhỏ, có thứ tự' },
      { t: '/speckit.tasks' },
      { c: '# 4. agent code theo task' },
      { t: '/speckit.implement' },
    ],
  },
  url: 'github.com/github/spec-kit',
  badge: 'TOOL · SPEC-KIT',
}

const mcp: ToolData = {
  name: 'Model Context Protocol',
  tagline: '“USB-C for AI” — chuẩn kết nối tool & data',
  layer: 'Harness · lớp chuẩn hoá',
  what: 'Chuẩn mở của Anthropic (11/2024): một giao diện hai chiều để nối model với tool, dữ liệu, hệ thống — giải bài toán tích hợp M×N.',
  points: [
    'Kiến trúc host → client → server, JSON-RPC qua stdio hoặc HTTP+SSE.',
    '3 primitive: Tools (hành động), Resources (dữ liệu read-only), Prompts (template).',
    'Một server MCP dùng được với mọi agent tương thích — viết một lần, chạy khắp nơi.',
  ],
  snippet: {
    title: '.mcp.json',
    lines: [
      { c: '{ "mcpServers": {' },
      { c: '    "playwright": {' },
      { c: '      "command": "npx",' },
      { c: '      "args": ["@playwright/mcp"] },' },
      { c: '    "github": {' },
      { c: '      "command": "npx",' },
      { c: '      "args": ["-y",' },
      { c: '        "@modelcontextprotocol/server-github"]' },
      { c: '    } } }' },
      { t: 'claude mcp add' },
    ],
  },
  url: 'modelcontextprotocol.io',
  badge: 'TOOL · MCP',
}

const playwright: ToolData = {
  name: 'Playwright MCP',
  tagline: 'Agent lái browser để kiểm chứng UI thật',
  layer: 'Harness · vòng lặp verify',
  what: 'MCP server của Microsoft cho agent điều khiển browser: điều hướng, đọc trang, click, gõ — đóng vòng lặp act→observe cho web.',
  points: [
    'Dùng accessibility tree (có ref id) thay screenshot: ~200–400 token/snapshot, không cần vision.',
    '~30 tool: browser_navigate / click / type / snapshot / take_screenshot.',
    'Agent chụp UI để xác nhận render đúng → chạy visual-regression, test web.',
  ],
  snippet: {
    title: 'agent browser loop',
    lines: [
      { t: 'browser_navigate("/checkout")' },
      { c: '# đọc a11y tree, không phải pixel' },
      { t: 'browser_snapshot()' },
      { c: '# → button "Pay" ref=e5' },
      { t: 'browser_click(ref="e5")' },
      { t: 'browser_snapshot()' },
      { c: '# ✓ modal "Success" xuất hiện' },
    ],
  },
  url: 'github.com/microsoft/playwright-mcp',
  badge: 'TOOL · PLAYWRIGHT',
}

const codegraph: ToolData = {
  name: 'Codegraph',
  tagline: 'Đồ thị codebase cho agent điều hướng',
  layer: 'Context · retrieval / indexing',
  what: 'Parse codebase (thường bằng tree-sitter) thành đồ thị symbol — hàm, class, import, call-chain — để agent truy vấn thay vì grep/đọc file lặp lại.',
  points: [
    'Hỏi “ai gọi X / Y phụ thuộc gì” → trả lời trong mili-giây qua đồ thị.',
    'Phơi bày qua MCP tool; chạy local, lưu như lớp memory bền.',
    'Ví dụ: codegraph-ai/CodeGraph, tree-sitter-analyzer, Sourcegraph.',
  ],
  snippet: {
    title: 'graph query',
    lines: [
      { t: 'callers_of("validateToken")' },
      { c: '# → auth.ts:42, middleware.ts:9' },
      { t: 'depends_on("PaymentService")' },
      { c: '# → Stripe, Ledger, Webhook' },
      { c: '' },
      { c: '# vendor-report: ~59% ít token,' },
      { c: '# ~70% ít tool-call' },
    ],
  },
  url: 'github.com/codegraph-ai/CodeGraph',
  badge: 'TOOL · CODEGRAPH',
  note: 'Số liệu là benchmark do vendor công bố, chưa được kiểm chứng độc lập.',
}

const impeccable: ToolData = {
  name: 'Impeccable + Caveman',
  tagline: 'Skill pack: chất lượng đầu ra & nén context',
  layer: 'Context · skill layer (+ Eval)',
  what: 'Skill nhét “ngôn ngữ & luật” vào agent. Impeccable dạy agent làm UI đẹp, chống “AI-look”. Caveman nén giao tiếp, giữ nguyên chất kỹ thuật.',
  points: [
    'Impeccable: /impeccable init ghi PRODUCT.md / DESIGN.md; ~45 luật detector bắt UI generic.',
    'Impeccable: ~23 lệnh — /polish, /audit; chạy được trên Cursor, Claude Code, Copilot.',
    'Caveman: cắt ~75% token bằng cách nói kiểu “người tối cổ”, thuật ngữ giữ nguyên.',
  ],
  snippet: {
    title: 'skill packs',
    lines: [
      { t: 'npx impeccable install' },
      { t: '/impeccable init' },
      { c: '# → PRODUCT.md, DESIGN.md' },
      { t: '/impeccable polish the pricing page' },
      { c: '' },
      { t: '/caveman full' },
      { c: '# token ↓ ~75%, kỹ thuật giữ nguyên' },
    ],
  },
  url: 'github.com/pbakaus/impeccable',
  badge: 'TOOL · SKILLS',
}

export const SlideSpecKit = () => <ToolSlide {...specKit} />
export const SlideMCP = () => <ToolSlide {...mcp} />
export const SlidePlaywright = () => <ToolSlide {...playwright} />
export const SlideCodegraph = () => <ToolSlide {...codegraph} />
export const SlideImpeccable = () => <ToolSlide {...impeccable} />
