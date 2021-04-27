package net.walletapp.registory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.walletapp.entity.Wallet;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {
	List<Wallet> findAllByOrderByPriority();
}
