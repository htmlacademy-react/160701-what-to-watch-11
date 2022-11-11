import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(objectSupport);
dayjs.extend(relativeTime);

class HumanizeDate {
  static FilmDuration(minute: number) {
    return dayjs({ minute }).format('H[h] mm[m]');
  }

  static FilmReleaseYear(date: Date) {
    return dayjs(date).format('YYYY');
  }

  static FilmRelease(date: Date) {
    return dayjs(date).format('M MMM YYYY');
  }

  static Comment(date: Date) {
    return dayjs(date).format('YYYY/MM/DD HH:mm');
  }

  static FromNow(date: Date) {
    return dayjs(date).fromNow();
  }
}

export { HumanizeDate };
