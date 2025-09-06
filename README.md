# 🚀 NextPizza project
Проект на **Next.js (App Router)** с типизацией на **TypeScript**, имитирующий работу онлайн-витрины "Додо пиццы"

---

## Стек
- **Next.js 14+** (App Router, `/app`)
- **TypeScript**
- **Prisma** (ORM) + PostgreSQL/SQLite (зависит от `DATABASE_URL`)
- **shadcn/ui** + Radix UI
- Node.js

---

## Быстрый запуск
1. Клонируем репозитирий
```bash
git clone https://github.com/12262004-m/NextPizza.git
```
2. Устанавливаем зависимости
```
npm install
```
3. Создаём .env и настраиваем БД
```
DATABASE_URL="***"
POSTGRES_URL="***"
PRISMA_DATABASE_URL="***"
```
4. Prisma: генерируем клиент, катаем миграции и заполняем
```
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
```
5. Запускаем dev-сервер
```
npm run dev
```

---

## Скрипты
Файл package.json содержит основные команды:
```
npm run dev              # запуск dev-сервера Next.js
npm run build            # сборка проекта для продакшена
npm run prisma:studio    # запуск Prisma Studio (GUI для работы с БД)
npm run prisma:push      # синхронизация схемы Prisma с БД
npm run prisma:seed      # выполнение seed-скрипта (наполнение БД начальными данными)
```
