package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Rezervacii;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RezervaciiRepository extends JpaRepository<Rezervacii,Long> {
}
