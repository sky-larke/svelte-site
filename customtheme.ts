
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-surface-900)",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-surface-900)",
		"--on-secondary": "var(--color-surface-900)",
		"--on-tertiary": "var(--color-surface-900)",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "var(--color-surface-900)",
		"--on-surface": "255 255 255",
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
		// secondary | #ECB5C3 
		"--color-secondary-50": "252 244 246", // #fcf4f6
		"--color-secondary-100": "251 240 243", // #fbf0f3
		"--color-secondary-200": "250 237 240", // #faedf0
		"--color-secondary-300": "247 225 231", // #f7e1e7
		"--color-secondary-400": "242 203 213", // #f2cbd5
		"--color-secondary-500": "236 181 195", // #ECB5C3
		"--color-secondary-600": "212 163 176", // #d4a3b0
		"--color-secondary-700": "177 136 146", // #b18892
		"--color-secondary-800": "142 109 117", // #8e6d75
		"--color-secondary-900": "116 89 96", // #745960
		// tertiary | #97BD6C
		"--color-tertiary-50": "242 250 232",  // #f2fae8
		"--color-tertiary-100": "233 245 216", // #e9f5d8
		"--color-tertiary-200": "219 239 192", // #dbefc0
		"--color-tertiary-300": "197 230 159", // #c5e69f
		"--color-tertiary-400": "161 212 109", // #a1d46d
		"--color-tertiary-500": "151 189 108", // #97bd6c  (base)
		"--color-tertiary-600": "135 168 96",  // #87a860
		"--color-tertiary-700": "115 143 80",  // #738f50
		"--color-tertiary-800": "90 113 63",   // #5a713f
		"--color-tertiary-900": "70 88 48",    // #465830

		// success | #8DAECE 
		"--color-success-50": "238 243 248", // #eef3f8
		"--color-success-100": "232 239 245", // #e8eff5
		"--color-success-200": "227 235 243", // #e3ebf3
		"--color-success-300": "209 223 235", // #d1dfeb
		"--color-success-400": "175 198 221", // #afc6dd
		"--color-success-500": "141 174 206", // #8DAECE
		"--color-success-600": "127 157 185", // #7f9db9
		"--color-success-700": "106 131 155", // #6a839b
		"--color-success-800": "85 104 124", // #55687c
		"--color-success-900": "69 85 101", // #455565
		// warning | #a12e6c 
		"--color-warning-50": "241 224 233", // #f1e0e9
		"--color-warning-100": "236 213 226", // #ecd5e2
		"--color-warning-200": "232 203 218", // #e8cbda
		"--color-warning-300": "217 171 196", // #d9abc4
		"--color-warning-400": "189 109 152", // #bd6d98
		"--color-warning-500": "161 46 108", // #a12e6c
		"--color-warning-600": "145 41 97", // #912961
		"--color-warning-700": "121 35 81", // #792351
		"--color-warning-800": "97 28 65", // #611c41
		"--color-warning-900": "79 23 53", // #4f1735
		// error | #E4737C 
		"--color-error-50": "251 234 235", // #fbeaeb
		"--color-error-100": "250 227 229", // #fae3e5
		"--color-error-200": "248 220 222", // #f8dcde
		"--color-error-300": "244 199 203", // #f4c7cb
		"--color-error-400": "236 157 163", // #ec9da3
		"--color-error-500": "228 115 124", // #E4737C
		"--color-error-600": "205 104 112", // #cd6870
		"--color-error-700": "171 86 93", // #ab565d
		"--color-error-800": "137 69 74", // #89454a
		"--color-error-900": "112 56 61", // #70383d
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