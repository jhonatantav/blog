import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Sobre mim
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Detalhes importantes da minha jornada
        </p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-full bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Com experiência em desenvolvimento de software, ofereço
          conectividade em tempo real e soluções integradas que
          atendem às necessidades de pequenas empresas e grandes
          instituições financeiras. Minha abordagem combina expertise
          técnica e visão estratégica para criar produtos robustos e
          escaláveis.
        </p>
        <p>
          Já trabalhei com diversas tecnologias, incluindo React,
          Nest.js, e PostgreSQL, desenvolvendo desde APIs até
          interfaces dinâmicas. Entre os projetos realizados, destaco
          integrações automatizadas, ferramentas de análise de dados e
          sistemas para tomada de decisão, sempre priorizando
          eficiência e facilidade de uso.
        </p>
        <p>
          <Link href="/contact">Achei o que preciso!</Link>
        </p>
      </div>
    </Container>
  );
}
