
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "var(--color-surface-900)",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-900)",
		"--on-secondary": "var(--color-primary-200)",
		"--on-tertiary": "var(--color-surface-900)",
		"--on-success": "var(--color-surface-900)",
		"--on-warning": "var(--color-surface-900)",
		"--on-error": "var(--color-primary-200)",
		"--on-surface": "var(--color-primary-200)",
		// =~= Theme Colors  =~=
		// primary | #a499cf 
		"--color-primary-50": "241 240 248", // #f1f0f8
		"--color-primary-100": "237 235 245", // #edebf5
		"--color-primary-200": "232 230 243", // #e8e6f3
		"--color-primary-300": "219 214 236", // #dbd6ec
		"--color-primary-400": "191 184 221", // #bfb8dd
		"--color-primary-500": "164 153 207", // #a499cf
		"--color-primary-600": "148 138 186", // #948aba
		"--color-primary-700": "123 115 155", // #7b739b
		"--color-primary-800": "98 92 124", // #625c7c
		"--color-primary-900": "80 75 101", // #504b65
		// secondary | #444561 
		"--color-secondary-50": "227 227 231", // #e3e3e7
		"--color-secondary-100": "218 218 223", // #dadadf
		"--color-secondary-200": "208 209 216", // #d0d1d8
		"--color-secondary-300": "180 181 192", // #b4b5c0
		"--color-secondary-400": "124 125 144", // #7c7d90
		"--color-secondary-500": "68 69 97", // #444561
		"--color-secondary-600": "61 62 87", // #3d3e57
		"--color-secondary-700": "51 52 73", // #333449
		"--color-secondary-800": "41 41 58", // #29293a
		"--color-secondary-900": "33 34 48", // #212230
		// tertiary | #95c0d9 
		"--color-tertiary-50": "239 246 249", // #eff6f9
		"--color-tertiary-100": "234 242 247", // #eaf2f7
		"--color-tertiary-200": "229 239 246", // #e5eff6
		"--color-tertiary-300": "213 230 240", // #d5e6f0
		"--color-tertiary-400": "181 211 228", // #b5d3e4
		"--color-tertiary-500": "149 192 217", // #95c0d9
		"--color-tertiary-600": "134 173 195", // #86adc3
		"--color-tertiary-700": "112 144 163", // #7090a3
		"--color-tertiary-800": "89 115 130", // #597382
		"--color-tertiary-900": "73 94 106", // #495e6a
		// success | #50bc83 
		"--color-success-50": "229 245 236", // #e5f5ec
		"--color-success-100": "220 242 230", // #dcf2e6
		"--color-success-200": "211 238 224", // #d3eee0
		"--color-success-300": "185 228 205", // #b9e4cd
		"--color-success-400": "133 208 168", // #85d0a8
		"--color-success-500": "80 188 131", // #50bc83
		"--color-success-600": "72 169 118", // #48a976
		"--color-success-700": "60 141 98", // #3c8d62
		"--color-success-800": "48 113 79", // #30714f
		"--color-success-900": "39 92 64", // #275c40
		// warning | #d5de83 
		"--color-warning-50": "249 250 236", // #f9faec
		"--color-warning-100": "247 248 230", // #f7f8e6
		"--color-warning-200": "245 247 224", // #f5f7e0
		"--color-warning-300": "238 242 205", // #eef2cd
		"--color-warning-400": "226 232 168", // #e2e8a8
		"--color-warning-500": "213 222 131", // #d5de83
		"--color-warning-600": "192 200 118", // #c0c876
		"--color-warning-700": "160 167 98", // #a0a762
		"--color-warning-800": "128 133 79", // #80854f
		"--color-warning-900": "104 109 64", // #686d40
		// error | #a12e6c 
		"--color-error-50": "241 224 233", // #f1e0e9
		"--color-error-100": "236 213 226", // #ecd5e2
		"--color-error-200": "232 203 218", // #e8cbda
		"--color-error-300": "217 171 196", // #d9abc4
		"--color-error-400": "189 109 152", // #bd6d98
		"--color-error-500": "161 46 108", // #a12e6c
		"--color-error-600": "145 41 97", // #912961
		"--color-error-700": "121 35 81", // #792351
		"--color-error-800": "97 28 65", // #611c41
		"--color-error-900": "79 23 53", // #4f1735
		// surface | #414053 
		"--color-surface-50": "227 226 229", // #e3e2e5
		"--color-surface-100": "217 217 221", // #d9d9dd
		"--color-surface-200": "208 207 212", // #d0cfd4
		"--color-surface-300": "179 179 186", // #b3b3ba
		"--color-surface-400": "122 121 135", // #7a7987
		"--color-surface-500": "65 64 83", // #414053
		"--color-surface-600": "59 58 75", // #3b3a4b
		"--color-surface-700": "49 48 62", // #31303e
		"--color-surface-800": "39 38 50", // #272632
		"--color-surface-900": "32 31 41", // #201f29
		
	}
}