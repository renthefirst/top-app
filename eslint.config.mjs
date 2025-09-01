import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    // Обращаю внимание, что extends я тут заменил на config.
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      //Ошибка, если точка с запятой отсутствует.
      semi: ["error"],
      //Ошибка, если для строковых литералов используются не одинарные кавычки.
      quotes: ["error", "single"],
      //Ошибка, если используется конкатенация строк вместо шаблонных литералов.
      "prefer-template": ["error"],
      //Ошибка, если в качестве коллбека используется не стрелочная функция.
      "prefer-arrow-callback": ["error"],
      //Ошибка, если в одном из ветвлений функция возвращает значение, а в другом нет.
      "consistent-return": "error",
      //Ошибка, если объявлен пустой интерфейс. Исключение, если он расширяет другой интерфейс.
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true },
      ],
      //Ошибка, если при импорте типа не используется type.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      //Обязывает указывать у функций тип возвращаемого значения.
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
        },
      ],
    },
  }),
];

export default eslintConfig;
