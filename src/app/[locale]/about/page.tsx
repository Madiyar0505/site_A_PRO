import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");
  const locale = useLocale();

  return (
    <main className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 flex justify-center">
        <div className="bg-white rounded-3xl border-2 border-[#fbbf24] shadow-xl px-6 py-10 max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#22543d]">{t('hero.title')}</h1>
          <div className="w-20 h-1 bg-[#fbbf24] rounded mb-6" />
          <p className="text-xl text-[#22543d]/90 text-center max-w-2xl">
            {t('hero.desc')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 flex justify-center">
        <div className="bg-white rounded-3xl border-2 border-[#fbbf24] shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-4xl w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center items-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-[#fff7e6] border-4 border-[#fbbf24] shadow-lg flex items-center justify-center">
              <Image
                src="/images/logo0.jpg"
                alt={t('aboutImageAlt')}
                width={224}
                height={224}
                className="object-contain w-48 h-48 md:w-56 md:h-56"
              />
            </div>
          </div>
          {/* Mission & Vision */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#22543d]">{t('mission.title')}</h2>
              <div className="w-16 h-1 bg-[#fbbf24] rounded mb-4 mx-auto md:mx-0" />
              <p className="text-lg text-[#22543d]/90">{t('mission.desc')}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2 text-[#22543d]">{t('vision.title')}</h2>
              <div className="w-16 h-1 bg-[#fbbf24] rounded mb-4 mx-auto md:mx-0" />
              <p className="text-lg text-[#22543d]/90">{t('vision.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#22543d]">{t('team.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.raw('team.members').map((member: any, idx: number) => (
            <Link
              key={idx}
              href={`/${locale}/about/${idx === 0 ? 'person1' : idx === 1 ? 'person2' : idx === 2 ? 'person3' : ''}`}
              className="flex flex-col items-center bg-white rounded-2xl border-2 border-[#fbbf24] shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:border-[#22543d] hover:-translate-y-1"
            >
              <div className="w-32 h-32 rounded-full border-4 border-[#fbbf24] flex items-center justify-center mb-4 overflow-hidden bg-[#fff7e6] text-[#22543d] text-3xl font-bold select-none">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  member.name.split(' ').map((n: string) => n[0]).join('').slice(0,2)
                )}
              </div>
              <h3 className="text-lg font-bold mb-1 text-[#22543d] text-center">{member.name}</h3>
              <p className="text-[#fbbf24] text-center text-base font-medium">{member.position}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ru' },
    { locale: 'kz' }
  ];
} 