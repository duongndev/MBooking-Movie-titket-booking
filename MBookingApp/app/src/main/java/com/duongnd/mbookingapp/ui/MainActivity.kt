package com.duongnd.mbookingapp.ui

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.databinding.ActivityMainBinding
import dagger.hilt.android.AndroidEntryPoint


@AndroidEntryPoint
class MainActivity : AppCompatActivity() {

    private var _binding: ActivityMainBinding? = null
    private val binding get() = _binding!!

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        _binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)


        binding.bottomNavMain.setOnItemSelectedListener { item ->
            binding.bottomNavMain.menu.findItem(binding.bottomNavMain.selectedItemId)
                ?.setIcon(getUnselectedIcon(binding.bottomNavMain.selectedItemId))
            item.setIcon(getSelectedIcon(item.itemId))
            when (item.itemId) {
                R.id.nav_home -> {}
                R.id.nav_ticket -> {}
                R.id.nav_movie -> {}
                R.id.nav_profile -> {}
            }
            true
        }
    }

    private fun getSelectedIcon(itemId: Int): Int {
        return when (itemId) {
            R.id.nav_home -> R.drawable.ic_home_fill
            R.id.nav_ticket -> R.drawable.ic_ticket_fill
            R.id.nav_movie -> R.drawable.ic_movie_fill
            R.id.nav_profile -> R.drawable.ic_user_fill
            else -> throw IllegalArgumentException("Unknown item id")
        }
    }

    private fun getUnselectedIcon(itemId: Int): Int {
        return when (itemId) {
            R.id.nav_home -> R.drawable.ic_home
            R.id.nav_ticket -> R.drawable.ic_ticket
            R.id.nav_movie -> R.drawable.ic_movie
            R.id.nav_profile -> R.drawable.ic_user
            else -> throw IllegalArgumentException("Unknown item id")
        }
    }
}