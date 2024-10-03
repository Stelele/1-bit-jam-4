export class Input {
    public static keys: Record<string, boolean> = {}
    public static debounceKeys: Record<string, boolean> = {}

    public static init() {
        window.addEventListener('keydown', (e) => {
            Input.keys[e.code] = true
            Input.debounceKeys[e.code] = true
            setTimeout(() => {
                Input.debounceKeys[e.code] = false
            }, 300)
        })

        window.addEventListener('keyup', (e) => {
            Input.keys[e.code] = false
        })
    }
}