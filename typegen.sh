filename=$1
rpc=$2

mkdir -p ./src/interfaces/$filename
rm -f ./src/interfaces/$filename/*

curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' $2 > $filename.json
npx tsx --experimental-specifier-resolution=node --loader ts-node/esm node_modules/.bin/polkadot-types-from-defs --package ${filename}-typegen/interfaces --endpoint ./$filename.json --input ./src/interfaces/$filename
npx tsx --experimental-specifier-resolution=node --loader ts-node/esm node_modules/.bin/polkadot-types-from-chain --package ${filename}-typegen/interfaces --endpoint ./$filename.json --output ./src/interfaces/$filename