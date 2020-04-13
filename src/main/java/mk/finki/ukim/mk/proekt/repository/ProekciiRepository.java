package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Proekcii;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProekciiRepository extends JpaRepository<Proekcii,Long> {
}
