# Bandersnatch Verifiable JS Bindings

## Building

```sh
wasm-pack build --release --target web --features small-ring
```

## Testing

```sh
cargo test --features "small-ring"
wasm-pack test --node --features small-ring
```
