/* 에이온 접속 설정 — 개발기 (ay-os-dev 저장소)
   Supabase 대시보드 > Project Settings > API 에서 두 값을 복사해 넣으세요.
   anonKey(공개키)는 화면에 들어가도 되는 키입니다. service_role 키는 절대 넣지 마세요. */
window.AYON_CONFIG = {
  env: 'dev',
  supabaseUrl: 'https://znxjjtdfxfhmuvtvjehq.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpueGpqdGRmeGZobXV2dHZqZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQxNTkwMjcsImV4cCI6MjEwOTczNTAyN30.ZlFDuX1aLFYgn8EDr0z-4llYmIfYgfskQ0bTXcIG_U4',
  /* 운영기 데이터 가져오기용 (운영기 공개키 · 읽기는 운영기 관리자 로그인으로만) */
  prodUrl: 'https://tyaxofefikngmffpevgk.supabase.co',
  prodAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5YXhvZmVmaWtuZ21mZnBldmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQxODUxMzQsImV4cCI6MjEwOTc2MTEzNH0.ruxjFzRJO6r3VGjufu98KQvumKN14tSBYR81A5mHUWk'
};
