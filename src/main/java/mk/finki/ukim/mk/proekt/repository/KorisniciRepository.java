package mk.finki.ukim.mk.proekt.repository;


import mk.finki.ukim.mk.proekt.model.Korisnici;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface KorisniciRepository  extends JpaRepository<Korisnici,Long> {
   Korisnici findByUsername(String username);

}
