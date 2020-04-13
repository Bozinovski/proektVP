package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.KinoSali;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KinoSaliRepository  extends JpaRepository<KinoSali,Long> {
}
