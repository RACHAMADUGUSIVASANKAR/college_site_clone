# University Site Builder - Development Server
# 
# Supabase Setup (Optional):
# 1. Create account at https://supabase.com
# 2. Create new project
# 3. Get connection string from Settings > Database > Connection pooling
# 4. Set DATABASE_URL below (or leave empty for in-memory storage)

# For in-memory storage (default - no database required)
$env:DATABASE_URL = ""

# For Supabase (replace with your connection string):
# $env:DATABASE_URL = "postgres://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres"

$env:PORT = "3000"
$env:NODE_ENV = "development"
$env:SESSION_SECRET = "srit_secret_key"

cd c:\Users\sivasankar\Downloads\University-Site-Builder\University-Site-Builder
npx tsx server/index.ts
