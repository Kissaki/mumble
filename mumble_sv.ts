# This file controls whether the translations foudn in this
# directory are simply a fallback for the cases in which Qt
# doesn't ship with its own translation for that locale or
# whether our translations are actually enforced (aka they
# overwrite Qt's)
#
# A line starting with a # is interpreted as a comment and is
# discarded
# All non-empty lines that are no comment have to be in the format
# <operator> <fileName>
# where <operator> is either fallback or overwrite (or override)
#
# To provide translation file x.ts as a fallback use
# fallback x.ts
# to force its usage use
# overwrite x.ts

fallback qt_it.ts
fallback qt_nl.ts
fallback qt_tr.ts
overwrite qt_zh_CN.ts
