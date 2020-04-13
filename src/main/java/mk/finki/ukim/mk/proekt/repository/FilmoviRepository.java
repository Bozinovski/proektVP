package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Filmovi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmoviRepository extends JpaRepository<Filmovi,Long> {
}
