// Copyright 2022 @paritytech/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

interface FormattingOptions {
  decimals: number
  symbol: string | undefined
  fractionDigits: number
}

const DEFAULT_OPTIONS: FormattingOptions = {
  decimals: 0,
  fractionDigits: 2,
  symbol: undefined,
}

export const formatBalance = (
  balance: bigint,
  partialOptions?: Partial<FormattingOptions>,
) => {
  const options: FormattingOptions = { ...DEFAULT_OPTIONS, ...partialOptions }

  if (options.decimals < 0) throw new Error("Decimals must be positive")
  if (options.fractionDigits < 0)
    throw new Error("Fraction digits must be positive")

  const balanceString = balance.toString()
  const integerDigits = balanceString.split("")
  const fractionDigits = integerDigits.splice(-options.decimals)

  const fractionalPart = fractionDigits.join("").padStart(options.decimals, "0")
  const integerPart = integerDigits.length ? integerDigits.join("") : "0"

  return (
    Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      BigInt(integerPart),
    ) +
    (options.decimals > 0
      ? "." +
        fractionalPart
          .toString()
          .slice(0, options.fractionDigits)
          .padEnd(options.fractionDigits, "0")
      : "") +
    (options.symbol ? ` ${options.symbol}` : "")
  )
}
