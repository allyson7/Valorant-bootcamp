import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonCardProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function LessonCard(props: LessonCardProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE ' • ' d' de 'MMMM' • 'k'h'mm ",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded px-2 py-[0.125rem] text-white border border-white font-bold",
              {
                "border-green-500": !isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("text-white mt-5 block", {
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
